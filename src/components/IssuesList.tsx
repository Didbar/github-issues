import React from 'react'
import Issue from './Issue'
import { List, ListItem } from '@mui/material'
import { Edge } from '../store/types'
import { Grid, Typography } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import Info from '../svgIcons/Info'
import { getStatusColor } from '../utils'

type Props = {
  issues: Edge[]
}

const IssuesList: React.FC<Props> = ({ issues }) => {
  return (
    <List>
      {issues.map(({ node }) => (
        <ListItem key={node.id}>
          <Grid
            container
            alignItems='center'
            spacing={1}
            columns={16}
            style={{
              backgroundColor: 'lightgray',
              borderRadius: '4px',
              padding: '2rem',
              overflow: 'auto'
            }}>
            <Grid item xs={8}>
              <Info style={{ color: getStatusColor(node.state), marginRight: '2rem' }} />
            </Grid>
            <Grid item xs={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ChatBubbleOutlineIcon
                style={{
                  fontSize: 'small',
                  color: getStatusColor(node.state),
                  margin: '0 .3rem 0 2rem'
                }}
              />
              <Typography variant='caption'>{node.comments.totalCount}</Typography>
            </Grid>
            <Grid item xs={16}>
              <Issue
                title={node.title}
                number={node.number}
                createdAt={node.createdAt}
                body={node.body}
              />
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  )
}

export default IssuesList
