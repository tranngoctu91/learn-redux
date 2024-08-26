import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, registerRequest } from "../services/auths/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { channel } from "redux-saga";

const Account = () => {
  debugger;
  const { token, error } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);
  const handleLogin = () => {
    dispatch(loginRequest({ username: "tutn", password: "123456" }));
  };

  const handleAdd = () => {
    dispatch(
      registerRequest({
        username: "tutn",
        password: "123456",
        email: "tutn.mmo@gmail.com",
        ComfirmPassword: "123456",
      })
    );
  };

  return (
    <div>
      <button onClick={handleLogin}> Login</button>
      <button onClick={handleAdd}> Add</button>
      {error && <h1>{error.notifications[0]}</h1>}
    </div>
  );
};

export default Account;
