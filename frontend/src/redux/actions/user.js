import axios from 'axios';

export const userLogin = (regObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})
    try{
        const user = await axios.post('/api/users/login', regObj);
        localStorage.setItem('user', JSON.stringify(user.data))
        dispatch({type: 'LOADING', payload: false});
    }catch(err){
        console.log(err);
        dispatch({type: 'LOADING', payload: false})
    }
}

export const userRegister = (regObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})
    try{
        const user = await axios.post('/api/users/register', regObj);
        dispatch({type: 'LOADING', payload: false});
    }catch(err){
        console.log(err);
        dispatch({type: 'LOADING', payload: false})
    }
}