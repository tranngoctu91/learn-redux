import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, registerRequest } from '../services/auths/authSlice';

const Account = () => {
    const { token, error } = useSelector(state => state.auth)
   
    const dispatch = useDispatch()
    const handleLogin = ()=>{
        dispatch(loginRequest({username: "tutn", password: "123456"}))
    }

    const handleAdd = ()=>{
        dispatch(registerRequest({username: "tutn", password: "123456", email: "tutn.mmo@gmail.com", ComfirmPassword: "123456"}))
    }
    return (
        <div>
            <p>{token}</p>
            <button onClick={handleLogin}> Login</button>
            <button onClick={handleAdd}> Add</button>
           {error && <h1>{error.notifications[0]}</h1> } 
        </div>
    );
};

export default Account;