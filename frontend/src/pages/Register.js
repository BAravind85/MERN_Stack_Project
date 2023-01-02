import React from 'react'
import Layout from '../Compenents/Layout' 

const onFinish = (values) => {
  console.log(values);
}

const Register = () => {
  return (
    <Layout>
      <div className='form-container'>
        <div className='form-groups'>
          <form className='form' onSubmit={onFinish}>
            <h3 className='form-title'>Register</h3>
            <div className='form-group'>
            <labal htmlFor='username'>Username</labal>
              <input type='email' className='input' id='username' required/>
            </div>
            <div className='form-group'>
              <labal htmlFor='password'>Password</labal>
              <input type='password' className='input' id='password' required/>
            </div>
            <div className='form-group'>
              <labal htmlFor='rpassword' >Retype Password</labal>
              <input type='password' className='input' id='rpassword' required/>
            </div>
            <div className='form-group'>
            <button className="book-now">Register</button>
            </div>
            <div className='form-group'>
              <p>You have an account ? <a href="/login" className='form-link'>Here for Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Register