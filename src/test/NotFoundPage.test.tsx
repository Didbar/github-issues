import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from '../pages/NotFoundPage'
import { MemoryRouter as Router } from 'react-router-dom'

describe('NotFound component', () => {
  test('renders without crashing', async () => {
    render(
      <Router>
        <NotFound />
      </Router>
    )
    expect(screen.getByRole('heading')).toHaveTextContent('404 Not found!')
  })
})
