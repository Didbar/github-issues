import React from 'react'
import Issue from './Issue'
import { List, ListItem, ListItemIcon } from '@mui/material'
import { Edge } from '../store/types'
import { Grid, Typography } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import Info from '../svgIcons/Info'
import { getIconColor } from '../utils'

type Props = {
  issues: Edge[]
}

const IssuesList: React.FC<Props> = ({ issues }) => {
  return (
    <List>
      {issues.map(({ node }) => (
        <ListItem key={node.id}>
          <Grid container justifyContent='space-between' alignItems='center'>
            <ListItemIcon>
              <Info style={{ color: getIconColor(node.state), marginRight: '2rem' }} />
            </ListItemIcon>
            <Issue title={node.title} number={node.number} createdAt={node.createdAt} />
            <ListItemIcon>
              <ChatBubbleOutlineIcon
                style={{
                  fontSize: 'small',
                  color: getIconColor(node.state),
                  margin: '0 .3rem 0 2rem'
                }}
              />
              <Typography variant='caption'>{node.comments.totalCount}</Typography>
            </ListItemIcon>
          </Grid>
        </ListItem>
      ))}
    </List>
  )
}

export default IssuesList
