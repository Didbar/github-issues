import React from 'react'
import { Tabs, Tab } from '@mui/material'

interface Props {
  onChange: (e: React.SyntheticEvent, value: string) => void
  state: string
  statesCounts: any
}
const IssueListFilter: React.FC<Props> = ({ state, onChange, statesCounts }) => {
  const { closedCount, openedCount } = statesCounts.repository
  return (
    <Tabs value={state} onChange={onChange}>
      <Tab value='OPEN' label={`OPEN (${openedCount.totalCount})`} />
      <Tab value='CLOSED' label={`CLOSED (${closedCount.totalCount})`} />
    </Tabs>
  )
}
export default IssueListFilter
