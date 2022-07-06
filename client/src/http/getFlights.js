import axios from 'axios';


export default function getFlights()  { 
    let data;
        data = axios.get("http://localhost:8080/flight")
                .then((response) => {
                    return response.data;
                }).catch((err) => {
                    console.log(err)
                });
    return data;
}