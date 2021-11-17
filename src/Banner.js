import { Button } from '@mui/material'
import React, { useState } from 'react'
import './banner.css'
import Searchcomp from './Search'
import {useHistory} from 'react-router-dom'

function Banner(props) {
    const history = useHistory();
    const[showDate,setShowDate] = useState(false)

    return (
        <div className='banner'>
            <div className='banner_search'>
                {showDate && <Searchcomp/>}
                <Button variant='outined' className='banner_search_button' onClick={()=>setShowDate(!showDate)}>{showDate ? "Hide": "Search dates"}</Button>
            </div>
           
            <div className='banner_text'>
            
                <h1>Get Out and Explore!</h1>
                <h5>Plan a different type of getaway to uncover the hidden gems around you.</h5>
                
                <Button variant='outlined' onClick={()=> history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
