import React, { useState } from "react";
import {MultipleFileUpload} from './Data/API';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FileUpload() {
const [multipleFiles,setmultipleFiles] = useState('');
const [hotelname, setHotelname] = useState();
const [location,setLocation] = useState();
const [desc, setDesc] = useState();
const [rating, setRating] = useState(0);
const [price,setPrice] = useState()
const [multipleProgress,setmultipleProgress] = useState(0);

const MultipleFileChange = (e) => {
    setmultipleFiles(e.target.files);
    setmultipleProgress(0);
}

const multipleFileOptions = {
    onUploadProgress:(ProgressEvent) => {
        const {loaded,total} = ProgressEvent;
        const percentage = Math.floor(((loaded/1000)*100) / (total/1000));
        setmultipleProgress(percentage);
    }
}

const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append('hotelname',hotelname);
    formData.append('location',location);
    formData.append('desc',desc);
    formData.append('rating',rating);
    formData.append('price',price);
    for (let i = 0; i < multipleFiles.length; i++) {
        formData.append('files',multipleFiles[i])
        
    }
    
    await MultipleFileUpload(formData,multipleFileOptions);
}

  return (
    <div className="row mt-3 ml-5">
      <div className="col-6">
        <label>Hotel Name</label>
        <input type="text" onChange={(e)=>setHotelname(e.target.value)} className="form-control" />
        <label>Location</label>
        <input type="text" onChange={(e)=>setLocation(e.target.value)} className="form-control" />
        <label>Price</label>
        <input type="number" onChange={(e)=>setPrice(e.target.value)} className="form-control" />
        <label>Description</label>
        <textarea
          onChange={(e)=>setDesc(e.target.value)}
          placeholder="Good reasons to stay @ your place"
          className="form-control"
        />
        <label>Rating</label>
        <select className="form-control" onChange={(e)=>setRating(e.target.value)} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="form-group">
          <label>Upload photos of your Property</label>
          <input type="file" onChange={(e)=>MultipleFileChange(e)} className="form-control" multiple  />
        </div>
        <div className="row">
          <div className="col-10">
            <button type="button" onClick={()=> UploadMultipleFiles()} className="btn btn-primary" multiple>Upload</button>
          </div>
          <div className="col-2">
              <CircularProgressbar value={multipleProgress} text={`${multipleProgress}%`} styles={buildStyles({
                  rotation:0.25,
                  strokeLinecap:'butt',
                  textSize:'16px',
                  pathTransitionDuration:0.5,
                  pathColor:`rgba(255,136,136, ${multipleProgress/100})`,
                  textColor:'#f88',
                  trailColor:'#d6d6d6',
                  backgroundColor:'#3e98c7',
              })}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
