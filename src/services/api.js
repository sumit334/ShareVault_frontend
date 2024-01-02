import axios from 'axios';


const API_URL='https://sharevault-fwv8.onrender.com';

const uploadFile = async (data) => {
    try {
        let response= await axios.post(`${API_URL}/upload`,data);
        return response.data;
    } catch (error) {
        console.error("error while calling the api",error.message);
    }
}

export default uploadFile;