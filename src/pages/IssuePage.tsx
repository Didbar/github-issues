import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'

// import { GET_ISSUE } from '../graphql/issues.graphql'
// import Issue from '../components/Issue'
// import Comment from '../components/Comment'
import { ISSUE_QUERY } from '../graphql/queries'
import * as types from '../store/types'

import Loading from '../components/common/Loading'
import ErrorMessage from '../components/common/Error'

type Params = {
  issueNumber: string
}

export const IssuePage: React.FC = () => {
  let { issueNumber } = useParams<Params>()
  const navigate = useNavigate()
  const { data, loading, error } = useQuery<types.GetIssuesData, types.GetIssueVariables>(
    ISSUE_QUERY,
    {
      variables: { number: Number(issueNumber) }
    }
  )
  if (loading) return <Loading />
  if (error) return <ErrorMessage error={error.message} />

  // if (data && data.repository) {
  //   setIssue(data.repository.issue)
  // }

  const goBack = () => {
    navigate(-1)
  }
  console.log(data)
  return (
    <>
      {data ? (
        <>
          {/* <h1>{issue.title}</h1>
          <p>{issue.body}</p>
          <p>State: {issue.state}</p>
          <h2>Comments</h2>
          {issue.comments.edges.map((comment: any) => (
            <div key={comment.node.id}>
              <p>{comment.node.body}</p>
            </div>
          ))} */}
          <button onClick={goBack}>Back</button>
          <h3>We have a Data</h3>
        </>
      ) : (
        <p>Issue not found</p>
      )}
    </>
  )
}
export default IssuePage
