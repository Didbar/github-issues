import React, { useEffect, useState } from 'react'
import { Tabs, Tab } from '@mui/material'

interface Props {
  onChange: (e: React.SyntheticEvent, value: string) => void
  state: string
  statesCounts: any
}
const IssueListFilter: React.FC<Props> = ({ state, onChange, statesCounts }) => {
  const { closedCount, openedCount } = statesCounts.repository
  const [smallScreen, setSmallScreen] = useState(window.matchMedia('(min-width: 768px)').matches)
  useEffect(() => {
    window
      .matchMedia('(max-width: 800px)')
      .addEventListener('change', (e) => setSmallScreen(e.matches))
  }, [])

  return (
    <Tabs value={state} onChange={onChange} centered={smallScreen}>
      <Tab value='OPEN' label={`OPEN (${openedCount.totalCount})`} />
      <Tab value='CLOSED' label={`CLOSED (${closedCount.totalCount})`} />
    </Tabs>
  )
}
export default IssueListFilter
