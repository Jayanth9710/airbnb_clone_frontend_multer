import axios from 'axios';

const apiUrl = 'http://localhost:8800/api/';

export const MultipleFileUpload = async (data,options) => {
    try {
        await axios.post(apiUrl + 'multipleFiles',data,options);
    } catch (error) {
        throw error;
    }
}

export const getMultipleFiles = async () => {
    try {
        const {data} = await axios.get(apiUrl + 'getMultipleFiles')
     return data;
    } catch (error) {
        throw error;
    }
} 

export const BookedRooms = async(req,res,id) => {
    try {
        const {bookings} = await axios.get(apiUrl + `/roomsbkd/${id}`,{
            headers : {
              "Authorization" : window.localStorage.getItem("app_token")
            }
          })
          return bookings;
    } catch (error) {
        throw error;
    }
}
 
