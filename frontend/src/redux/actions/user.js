import axios from 'axios';
import { toast } from 'react-toastify';

export const userLogin = (regObj) => async dispatch => {
    dispatch({type: 'LOADING', payload: true})
    try{
        const user = await axios.post('/api/users/login', regObj);
        localStorage.setItem('user', JSON.stringify(user.data));
        toast.success("Login successful");
        dispatch({type: 'LOADING', payload: false});
    }catch(err){
        console.log(err);
        toast.error("Error...Try again later");
        dispatch({type: 'LOADING', payload: false});
    }
}