import GetData from "../component/GetData";
import Card from "../component/Card";
import React, { useState, useEffect } from 'react';

export default function Homepage() {
    const [postList, setPostList] = useState([]);

    useEffect(() => { GetData() }, []);

    function handleRemoveItem(id) {
        GetData();
    }

    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <h1>Lista Card </h1>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {postList.map((post) => (
                    <Card item={post} key={post.id} onRemove={handleRemoveItem} />
                ))}
            </div>
        </main>
    )
}   