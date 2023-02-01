import React from 'react'

interface Props {
  comment: {
    body: string
    createdAt: string
    author: {
      login: string
    }
  }
}

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <div>
      <h4>
        {comment.author.login} commented on {comment.createdAt}:
      </h4>
      <p>{comment.body}</p>
    </div>
  )
}

export default Comment
