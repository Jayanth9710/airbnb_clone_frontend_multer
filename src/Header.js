import React, { useContext, useState } from 'react'
import './Header.css'
import { FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import dataContext from './dataContext'

function Header() {
  const myStorage = window.localStorage;
    const [showRegister,setShowRegister] = useState(false);
  const [showLogin,setShowLogin] = useState(false);
  const [currentUser,setcurrentUser] = useState(myStorage.getItem("user"));
  const [location, setLocation] = useState('');
  const data = useContext(dataContext)



  const handleChange = (event) => {
     setLocation(event.target.value);
  };

  const handleLogout = async (e) =>{
    myStorage.removeItem("user");
    setcurrentUser();
  }
  data.setLoc(location)
    return (
      <>
        <div className='header'>
            <Link to="/">
            <img className='header_icon' src='logo.png' alt='logo'></img>
            </Link>
            
            <FormControl margin='normal' >
  <InputLabel id="demo-simple-select-label">Select Location</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={location}
    label="Select Location"
    onChange={handleChange}
  >
    <MenuItem value="Chennai" >Chennai</MenuItem>
    <MenuItem value="Pondicherry" >Pondicherry</MenuItem>
    <MenuItem value="Kodaikanal" >Kodaikanal</MenuItem>
    <MenuItem  value="Ooty">Ooty</MenuItem>
  </Select>
</FormControl>
                {/* <SearchIcon/> */}
            
            <div className='header_right'>
            <Link to="/host" className='host'>
                <p>Become a host</p>
                </Link>
                
                {currentUser ? (
          <button className="button logout" onClick={handleLogout}>Log out</button>
        ) : (
          <div className="buttons">
            <button className="button login" onClick={()=>setShowLogin(true)}>Login</button>
            <button className="button register" onClick={()=>setShowRegister(true)}>Register</button>
          </div>
        )}

        {showRegister && <Register setShowRegister={setShowRegister} />}
        {showLogin && <Login setShowLogin={setShowLogin} myStorage={myStorage} setcurrentUser={setcurrentUser} />}
                
            </div>
        </div>
        </> 
    )
    
}

export default Header
