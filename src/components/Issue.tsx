import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'

import { Typography, Grid } from '@mui/material'
import TimeAgo from './common/TimeAgo'

interface Props {
  title: string
  number: number
  createdAt: string
  body: string
}

const Issue: React.FC<Props> = ({ title, number, createdAt, body }) => {
  return (
    <Grid container alignItems='center' spacing={2} columns={16}>
      <Grid item xs={16}>
        <Link to={`/facebook/react/issues/${number}`}>{title}</Link>
      </Grid>
      <Grid item xs={16}>
        <ReactMarkdown children={body || '*No description provided*'} remarkPlugins={[remarkGfm]} />
      </Grid>
      <Grid item xs={16}>
        <Typography variant='caption' noWrap color='textSecondary'>
          #{number} opened <TimeAgo date={createdAt} />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Issue
