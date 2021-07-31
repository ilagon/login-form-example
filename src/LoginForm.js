import { useState, useRef } from "react";
import Credentials from "./utils/credUtils";

function LoginForm() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  //let cred = new Credentials(); 

  const cred = useRef(new Credentials())

  const register = () => {
    cred.current.registerCredentials(username, password);
  };

  const login = () => {
    cred.current.loginUser(username, password);
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