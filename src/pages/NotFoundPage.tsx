import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        gap: '1rem',
        minHeight: '80vh'
      }}>
      <Link to='/'> Go Back</Link>
      <h3>404 Not found!</h3>
      <p>Please Search carefully!</p>
    </div>
  )
}

export default NotFound
