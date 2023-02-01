import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { COMMENTS_QUERY } from '../../src/graphql/queries'
import { GetCommentsData, GetCommentVariables, CommentEdges } from '../store/types'

import Loading from './common/Loading/Loading'
import ErrorMessage from './common/Error'
import IssueComment from './IssueComment'

interface Props {
  issueNumber: number
}

const IssueCommentList: React.FC<Props> = ({ issueNumber }) => {
  const [commentList, setCommentList] = useState<CommentEdges[]>()

  const { data, loading, error } = useQuery<GetCommentsData, GetCommentVariables>(COMMENTS_QUERY, {
    variables: { number: issueNumber }
  })
  useEffect(() => {
    if (data) {
      setCommentList(data.repository.issue.comments.edges)
    }
  }, [data, commentList])

  if (loading) return <Loading />
  if (error) <ErrorMessage error={error.message} />

  return (
    <>
      {commentList ? (
        commentList.map(({ node: comment }) => (
          <IssueComment
            key={comment.id}
            body={comment.body}
            createdAt={comment.createdAt}
            author={comment.author}
          />
        ))
      ) : (
        <p>No Comments Found</p>
      )}
    </>
  )
}

export default IssueCommentList
