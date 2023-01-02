import React from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../Compenents/Layout'
import { userLogin } from '../redux/actions/user';

const Login = () => {

  const dispatch = useDispatch();
  const onFinish =(values) => {
    dispatch(userLogin(values));
    console.log(values);
  }

  return (
    <Layout>
      <div className='form-container'>
        <div className='form-groups'>
          <form className='form' onSubmit={onFinish}>
            <h3 className='form-title'>Login</h3>
            <div className='form-group'>
            <labal htmlFor='username'>Username</labal>
              <input type='email' className='input' id='username' required/>
            </div>
            <div className='form-group'>
              <labal htmlFor='password'>Password</labal>
              <input type='password' className='input' id='password' required/>
            </div>
            <div className='form-group'>
            <button className="book-now">Login</button>
            </div>
            <div className='form-group'>
              <p>Don't have an account ? <a href="/register" className='form-link'>Here for register</a></p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
