import React, { lazy, useEffect, useState, memo, Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { ISSUE_QUERY } from '../graphql/queries'
import { GetIssueData, GetIssueVariables, Issue } from '../store/types'

import Loading from '../components/common/Loading/Loading'
import ErrorMessage from '../components/common/Error'
import IssueHeader from '../components/IssueHeader'
import Button from '@mui/material/Button'
const IssueCommentList = lazy(() => import('../components/IssueCommentList'))

const IssueHeaderMemo = memo(({ issue }: { issue: Issue }) => {
  return <IssueHeader issue={issue} />
})

type Params = {
  issueNumber: string
}

export const IssuePage: React.FC = () => {
  const [issue, setIssue] = useState<Issue>()
  let { issueNumber } = useParams<Params>()

  const navigate = useNavigate()
  const { data, loading, error } = useQuery<GetIssueData, GetIssueVariables>(ISSUE_QUERY, {
    variables: { number: Number(issueNumber) }
  })
  useEffect(() => {
    if (data) {
      setIssue(data.repository.issue)
    }
  }, [data])

  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error.message} />

  const goBack = () => navigate(-1)

  return (
    <>
      {issue ? (
        <>
          <Button onClick={goBack} color='info' size='large'>
            Back
          </Button>
          <IssueHeaderMemo issue={issue} />
          <Suspense fallback={<Loading />}>
            <IssueCommentList issueNumber={issue.number} />
          </Suspense>
        </>
      ) : (
        <p>Issue not found</p>
      )}
    </>
  )
}
export default IssuePage
