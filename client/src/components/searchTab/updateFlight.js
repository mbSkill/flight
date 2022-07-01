import axios from 'axios';

export default function updateFlight(value) {
    let res;
    res = axios.patch('http://localhost:8080/flight', value)
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        });
    return res.json;
}