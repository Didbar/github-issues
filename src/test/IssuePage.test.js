import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import IssuePage from '../pages/IssuePage'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { apolloClient } from '../constants'

jest.mock('react-markdown', () => ({ children }) => <div>{children}</div>)
const client = new ApolloClient(apolloClient)

describe('NotFound component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ApolloProvider client={client}>
        <Router>
          <IssuePage />
        </Router>
      </ApolloProvider>
    )
    expect(container).toBeInTheDocument()
  })
})
