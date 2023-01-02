import React from 'react'
import Layout from '../Compenents/Layout'

const Login = () => {
  return (
    <Layout>
      <div className='form-container'>
        <div className='form-groups'>
          <form className='form'>
            <h3 className='form-title'>Login</h3>
            <div className='form-group'>
            <labal htmlFor='username'>Username</labal>
              <input type='password' id='username' required/>
            </div>
            <div className='form-group'>
              <labal htmlFor='password'>Password</labal>
              <input type='password' id='password' required/>
            </div>
            <div className='form-group'>
            <button className="book-now">Login</button>
            </div>
            <div className='form-group'>
              <p>Don't have an account ? <a herf='/register'>Here for Register</a> </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
