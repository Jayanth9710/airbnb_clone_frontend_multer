import React, { useState } from 'react'

function AddRooms() {

    const [hotelname, setHotelname] = useState();
  const [location,setLocation] = useState();
  const [desc, setDesc] = useState();
  const [rating, setRating] = useState(0);
  const [price,setPrice] = useState()

    
    return (
        <div>
            <form action='/rooms' encType='multipart/form-data' >
                <label>Hotelname</label>
                <input
                  placeholder="Enter Hotel Name"
                  onChange={(e) => setHotelname(e.target.value)}
                ></input>
                 <label>location</label>
                <input
                  placeholder="Enter Location"
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
                <label>price</label>
                <input
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
                <label>Description</label>
                <textarea
                  placeholder="Say something about the place!"
                  onChange={(e) => setDesc(e.target.value)}
                />
                <label>Rating</label>
                <select onChange={(e) => setRating(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <input type="file" name="file" id='file' className='file-input'/>
                <label htmlFor='file'>Upload Images of your property.</label>
                <button className="submitButton" type="submit">
                  Confirm  Room
                </button>
              </form>
        </div>
    )
}

export default AddRooms
