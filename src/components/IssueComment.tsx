import React from 'react'
import ReactMarkdown from 'react-markdown'

import { Grid, Typography, Avatar } from '@mui/material'
import TimeAgo from './common/TimeAgo'

import './issueComment.css'

type Props = {
  body: string
  author: {
    avatarUrl: string
    login: string
  }
  createdAt: string
}

const IssueComment: React.FC<Props> = ({ body, author, createdAt }) => {
  const { avatarUrl, login } = author || {}

  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        borderRadius: '1rem',
        padding: '1rem',
        margin: '1rem 0'
      }}>
      <Grid container justifyContent='right' gap={'2rem'} alignItems='center'>
        <Avatar src={avatarUrl} />
        <Typography variant='subtitle2'>
          <span>{login}</span>
        </Typography>
      </Grid>

      <ReactMarkdown children={body || '*No description provided*'} />

      <Typography variant='body2' color='textSecondary' align='right'>
        <span>
          commented <TimeAgo date={createdAt} />
        </span>
      </Typography>
    </div>
  )
}

export default IssueComment
