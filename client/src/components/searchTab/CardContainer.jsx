import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL= process.env.NODE_URI;

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