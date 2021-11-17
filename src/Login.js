import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import "./Login.css";
import { Cancel } from '@material-ui/icons';
const dotenv = require('dotenv')


dotenv.config();

function Login({setShowLogin,myStorage,setcurrentUser}) {

  const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [failure, setFailure] = useState(false);
    let history = useHistory()
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let logindata = await axios.post(`http://localhost:8800/api/login`, { username, password })
            console.log(logindata)
            myStorage.setItem("user",username)
            window.localStorage.setItem("app_token",logindata.data.token);
            setcurrentUser(username)
            setShowLogin(false)
            history.push("/rooms");
           
      setFailure(false);
        } catch (error) {
            console.log(error);
            setFailure(true);
        }
    }
    return (
        
            <div className="loginContainer">
     <h3 className='log-in'>Log in</h3>
      <form  onSubmit={handleSubmit}>
      <label htmlFor="usr">Username</label>
        <input type="text"  id='usr' onChange={e => setusername(e.target.value)} />
        <label htmlFor="psd">password</label>
        <input type="password"  id='psd' onChange={e => setpassword(e.target.value)}  />
        <button className="loginButton">Login</button>
        {failure && <span className="failure">Something went wrong!</span>}
      </form>
      <Cancel className="closeLogin" onClick={() => setShowLogin(false)} />
    </div>
        
    )
}

export default Login
