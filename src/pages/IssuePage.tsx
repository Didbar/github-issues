import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'

// import { GET_ISSUE } from '../graphql/issues.graphql'
// import Issue from '../components/Issue'
// import Comment from '../components/Comment'
import { ISSUE_QUERY } from '../graphql/queries'
import { GetIssueData, GetIssueVariables, DetailedIssue } from '../store/types'

import Loading from '../components/common/Loading'
import ErrorMessage from '../components/common/Error'
import IssueHeader from '../components/IssueHeader'
import IssueCommentList from '../components/IssueCommentList'
import Button from '@mui/material/Button'

type Params = {
  issueNumber: string
}

export const IssuePage: React.FC = () => {
  const [issue, setIssue] = useState<DetailedIssue>()
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
          <IssueHeader issue={issue} />
          <IssueCommentList issueNumber={issue.number} />
        </>
      ) : (
        <p>Issue not found</p>
      )}
    </>
  )
}
export default IssuePage
