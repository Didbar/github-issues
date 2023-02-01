import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

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
      <Button onClick={goBack} variant='outlined' size='medium'>
        Go Back
      </Button>
      <h3>404 Not found!</h3>
      <p>Please Search carefully!</p>
    </div>
  )
}

export default NotFound
