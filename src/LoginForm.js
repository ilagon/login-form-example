import { useState, useEffect } from "react";
import Credentials from "./utils/credUtils";

function LoginForm() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let cred; 

  useEffect(() => {
   cred = new Credentials();
  });

  const register = () => {
    cred.registerCredentials(username, password);
  };

  const login = () => {
    cred.loginUser(username, password);
  };
  return (
    <div className='form-container'>
      <div className='App'>
        <h1>Login Form</h1>
        <input
          type='text'
          name='username'
          placeholder='username'
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;

let obj1 = {
  "userName": "username",
  "userPass": "password"
}

let obj2 = {
  "username":"password"
}