import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='container mt-3'>
      <div className='error-section text-center pt-5'>
        <h1>404</h1>
        <h4>UH OH! You're lost.</h4>
        <p>The page you are looking for does not exist. How you get here is a mystery. But you can click the button below to go back to the homepage.</p>
        <NavLink to='/'>
        <button className='button'>Go Back to Home</button>
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage
