import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { Typography, ListItemText, Grid } from '@mui/material'
import TimeAgo from './common/TimeAgo'

interface Props {
  title: string
  number: number
  createdAt: string
  body: string
}

const Issue: React.FC<Props> = ({ title, number, createdAt, body }) => {
  return (
    <ListItemText>
      <Grid container direction='column' gap={'1rem'}>
        <Link to={`/facebook/react/issues/${number}`}>{title}</Link>
        <ReactMarkdown children={body || '*No description provided*'} />
        <Typography variant='caption' noWrap color='textSecondary'>
          #{number} opened <TimeAgo date={createdAt} />
        </Typography>
      </Grid>
    </ListItemText>
  )
}

export default Issue
