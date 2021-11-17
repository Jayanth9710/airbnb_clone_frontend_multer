import { React, useEffect, useState, useContext } from "react";
import "./SearchResults.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { getMultipleFiles } from "./Data/API";
import dataContext from "./dataContext";
import { Button } from "@mui/material";
import {useHistory} from 'react-router-dom';
import axios from 'axios'

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function SearchResults() {
  const history = useHistory();
  const [multipleFiles, setmultipleFiles] = useState([]);
  const data = useContext(dataContext);
  const getRoomInfo = async () => {
    try {
      const roomsList = await getMultipleFiles();
      setmultipleFiles(roomsList);
      console.log([...multipleFiles]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (id) => {
       try {
         const rooms = await axios.get(`http://localhost:8800/api/roomsbkd/${id}`,{headers : {
          "Authorization" : window.localStorage.getItem("app_token")
        }
      });
      history.push('/rooms')
      return rooms;
       } catch (error) {
         
       }
  }

  useEffect(() => {
    getRoomInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let totalPrice;

  return (
    <>
      {multipleFiles.map((e, index) => (
        <div key={e._id} className="searchResults">
          {e.files.map((file, index) => (
            <img
              src={`http://localhost:8800/${file.filePath}`}
              alt="img"
              className="room-img"
              key={"img"}
            />
          ))}

          <div className="searchResults_text">
            <div className="searchResults_top_text">
              <h3>{e.hotelname}</h3>
              <h3>{e.location}</h3>
              <p>_____</p>
              <ReadMore>{e.desc}</ReadMore>
            </div>
            <div className="searchResults_bottom_text">
              <div className="searchResults_stars">
                <p>
                  <strong>{e.rating}</strong>
                </p>
                <StarIcon className="searchResults_star" />
              </div>
              <div className="searchResults_price">
                <h3>{e.price}/night</h3>
                <h4>
                  Total Price : {(totalPrice = data.days * e.price)} for{" "}
                  {data.days} days
                </h4>
                <Button variant='outlined' onClick={()=>handleSubmit(e._id)}>Book</Button>
              </div>
            </div>
          </div>

          <FavoriteBorderIcon className="searchResults_heart" />
        </div>
      ))}
    </>
  );
}

export default SearchResults;
