import React from 'react'
interface Props {
  error: string
}

const ErrorMessage: React.FC<Props> = ({ error }) => (
  <div className='ErrorMessage'>
    <small>{error.toString()}</small>
  </div>
)

export default ErrorMessage
