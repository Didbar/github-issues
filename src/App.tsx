import React from 'react'
import Router from './routes'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { apolloClient } from './constants'

const client = new ApolloClient(apolloClient)

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
