import {React,useState,useEffect,useContext} from 'react';
import {BookedRooms} from './Data/API';
import axios from 'axios'
import dataContext from "./dataContext";

function RoomsBooked() {
    const data = useContext(dataContext);
    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        getbookings();
         // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);
      
const getbookings = async (id) => {
    try {
      const bookedrooms = await axios.get(`http://localhost:8800/api/roomsbkd/${id}`,{headers : {
       "Authorization" : window.localStorage.getItem("app_token")
     }
   });
   setRooms(bookedrooms) ;
    } catch (error) {
      
    }
}
let totalPrice;
    return (
        <div>
            
            <div key={rooms._id}>
                <h3>{rooms.hotelname}</h3>
                <h3>{rooms.location}</h3>
                <h4>
                  Total Price : {(totalPrice = data.days * rooms.price)} for
                  {data.days} days
                </h4>
            </div>
        </div>
    )
}

export default RoomsBooked
