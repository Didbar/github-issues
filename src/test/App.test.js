import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

jest.mock('react-markdown', () => ({ children }) => <div>{children}</div>)

describe('App component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeInTheDocument()
  })
})
