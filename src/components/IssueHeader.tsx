import React from 'react'

import { IconButton, Typography, Tooltip, Grid } from '@mui/material'
import { OpenInNew } from '@mui/icons-material'
import TimeAgo from './common/TimeAgo'
import { Issue } from '../store/types'
import { getStatusColor } from '../utils'

interface Props {
  issue: Issue
}

const IssueHeader: React.FC<Props> = ({ issue }) => {
  const timeAgo = issue.createdAt && <TimeAgo date={issue.createdAt} />
  const issueNumber = issue.number && <span>#{issue.number}</span>
  const issueState = issue.state && (
    <span style={{ color: getStatusColor(issue.state) }}>{issue.state}</span>
  )
  return (
    <div>
      <Typography variant='h5'>
        <span>
          {issue.title} {issueNumber}{' '}
        </span>
      </Typography>

      <Typography variant='body1' color='textSecondary' component='span'>
        <Grid container justifyContent='space-between' alignItems='center'>
          <span>Status: {issueState}</span>
          <span>Created {timeAgo}</span>
          <span>{issue.comments.totalCount} comments</span>
          {issue.url && (
            <Tooltip title='Open in github'>
              <IconButton href={issue.url}>
                <OpenInNew color='action' />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
      </Typography>
    </div>
  )
}

export default IssueHeader
