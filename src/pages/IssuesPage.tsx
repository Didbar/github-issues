import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_ISSUES_DETAILED, ISSUES_COUNT_QUERY } from '../graphql/queries'
import { GetIssuesData, GetIssuesVariables, Edge, GetStateCountsData } from '../store/types'

import SearchBar from '../components/common/SearchBar'
import Loading from '../components/common/Loading'
import ErrorMessage from '../components/common/Error'
import IssuesList from '../components/IssuesList'

import { defPageSize, repoName, SOMETHING_WENT_WRONG } from '../constants'
import { checkTitle } from '../utils'

const IssueListFilter = React.lazy(() => import('../components/IssueListFilter'))

interface Props {}

const IssuesPage: React.FC<Props> = () => {
  const [issueState, setIssueState] = useState<string>('OPEN')
  const [issuesList, setIssuesList] = useState<Edge[]>([])
  const [issuesListFiltered, setIssuesListFiltered] = useState<Edge[]>([])

  const variables = { repo: repoName, pageSize: defPageSize, state: [issueState] }

  const { data, loading, error } = useQuery<GetIssuesData, GetIssuesVariables>(
    GET_ISSUES_DETAILED,
    { variables }
  )
  const {
    data: statesCounts,
    loading: stateCountsLoading,
    error: stateCountsError
  } = useQuery<GetStateCountsData>(ISSUES_COUNT_QUERY)

  useEffect(() => {
    if (data) {
      setIssuesList(data.repository.issues.edges)
      setIssuesListFiltered(data.repository.issues.edges)
    }
  }, [data])

  if (loading || stateCountsLoading) return <Loading />
  if (error || stateCountsError) {
    const errorMessage = error
      ? error.message
      : stateCountsError
      ? stateCountsError.message
      : SOMETHING_WENT_WRONG
    return <ErrorMessage error={errorMessage} />
  }

  const setSearchQuery = (input: string) => {
    if (!input) {
      setIssuesListFiltered(issuesList)
    } else {
      const filtered = issuesList.filter(
        (item) => checkTitle(item.node.title, input) || checkTitle(item.node.body, input)
      )
      setIssuesListFiltered(filtered)
    }
  }

  const handleChangeState = (e: React.SyntheticEvent, value: string) => {
    setIssueState(value)
  }

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />
      {statesCounts && (
        <IssueListFilter
          state={issueState}
          onChange={handleChangeState}
          statesCounts={statesCounts}
        />
      )}
      {issuesListFiltered && <IssuesList issues={issuesListFiltered} />}
    </>
  )
}

export default IssuesPage
