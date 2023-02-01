import React from 'react'
import { render } from '@testing-library/react'
import NotFound from '../pages/NotFoundPage'

describe('NotFound component', () => {
  it('renders without crashing', () => {
    const { container } = render(<NotFound />)
    expect(container).toBeTruthy()
  })
})
