import axios from 'axios';


export function getOneFlightById(id)  { 
    let data;
        data = axios.get(`http://localhost:8080/flight/${id}`)
                .then((response) => {
                    return response.data;
                }).catch((err) => {
                    console.log(err)
                });
    return data;
}