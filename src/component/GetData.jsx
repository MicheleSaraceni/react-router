import axios from 'axios';
import { useState } from 'react';

const [postList, setPostList] = useState([]);                 //da chiedere 
const apiURL = "http://localhost:3000/posts";
export default function GetData() {
    axios
        .get(apiURL)
        .then((res) => {
            console.log(res.data);
            setPostList(res.data);
        });
}