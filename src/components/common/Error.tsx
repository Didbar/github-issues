import React from 'react'
interface Props {
  error: string
}
const title = 'Something went wrong'

const ErrorMessage: React.FC<Props> = ({ error }) => (
  <div className='error-container'>
    <h5>{title}</h5>
    <small>{error.toString()}</small>
  </div>
)

export default ErrorMessage
