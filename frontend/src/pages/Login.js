import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../Compenents/Layout'

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler =  async (e) => {
  e.preventDefault();
    dispatch({type: 'LOADING', payload: true})
    try{
        const {data} = await axios.post('/api/users/login',{
          username,
          password
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
        toast.success("Login successful");
        dispatch({type: 'LOADING', payload: false});
        navigate('/');
    }catch(err){
        console.log(err);
        toast.error("Invalid username or password");
        dispatch({type: 'LOADING', payload: false});
    }
}
useEffect(()=>{
  if(localStorage.getItem('userInfo')){
    localStorage.getItem('userInfo');
    navigate('/');
  }
})

  return (
    <Layout>
      <div className='form-container'>
        <div className='form-groups'>
          <form className='form' onSubmit={submitHandler}>
            <h3 className='form-title'>Login</h3>
            <div className='form-group'>
            <labal htmlFor='username'>Username</labal>
              <input type='email' className='input' id='username' required onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className='form-group'>
              <labal htmlFor='password'>Password</labal>
              <input type='password' className='input' id='password' required onChange={(e)=>setPassword(e.target.value)}/>
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
