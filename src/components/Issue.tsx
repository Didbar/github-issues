import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, ListItemText, Grid } from '@mui/material'
import TimeAgo from './common/TimeAgo'

interface Props {
  title: string
  number: number
  createdAt: string
}

const Issue: React.FC<Props> = ({ title, number, createdAt }) => {
  return (
    <ListItemText>
      <Grid container direction='column'>
        <Link to={`/facebook/react/issues/${number}`}>{title}</Link>
        <Typography variant='caption' noWrap color='textSecondary'>
          #{number} opened <TimeAgo date={createdAt} />
        </Typography>
      </Grid>
    </ListItemText>
  )
}

export default Issue
