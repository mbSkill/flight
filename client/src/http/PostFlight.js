import axios from 'axios';

export default function postFlight(value) {
    let res;
    res = axios.post('http://localhost:8080/flight', value)
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        });
    return res.json;
}