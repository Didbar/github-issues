import { HttpLink, InMemoryCache } from '@apollo/client'

export const IssueStates = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
}

export const defPageSize = 5
export const repoName = 'react'
export const SOMETHING_WENT_WRONG = 'Something went wrong!'

export const apolloClient = {
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
  })
}
