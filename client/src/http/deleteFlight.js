import axios from 'axios';

export default function deleteFlightById(id) {
    let res;
    res = axios.delete(`http://localhost:8080/flight/${id}`)
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        });
    return res.json;
}