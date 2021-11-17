import { Cancel, Explore } from "@material-ui/icons"
import {  useState } from "react"
import  "./register.css"
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function Register({setShowRegister}) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [success,setSuccess] = useState(false);
const [failure,setFailure] = useState(false);
const history = useHistory()

const handleSubmit = async (e) => {
    e.preventDefault();

   
    try {
        await axios.post(`http://localhost:8800/api/register`, { username, password });
        history.push("/login");
        setFailure(false)
        setSuccess(true)
    } catch (error) {
        console.log(error)
        setFailure(true);
    }
}

    return (
        <div className="registerContainer">
            <div className="logo">
        <Explore/>
        Airbnb
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" onChange={e => setusername(e.target.value)} />
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password" onChange={e => setpassword(e.target.value)}/>
                <button className="registerButton">Register</button>
                {success &&(
                    <span className="success">Successful.You can log in now!</span>
                )}
                {failure && (
                <span className="failure">Something went wrong!</span>
                )}
                
                
            </form>
            <Cancel className="closeRegister" onClick={()=>setShowRegister(false)}/>
        </div>
    )
}

export default Register
