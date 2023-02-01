import React from 'react'
import { render } from '@testing-library/react'
import NotFound from '../pages/NotFoundPage'
import { MemoryRouter as Router } from 'react-router-dom'

describe('NotFound component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Router>
        <NotFound />
      </Router>
    )
    expect(container).toBeTruthy()
  })
})
