import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from '../config/firebase';
import './css/SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db
        .collection('rooms')
        .onSnapshot((snapshot) => {
            setRooms(snapshot.docs.map((doc) => ({
                id: doc.id,
                room: doc.data()
            })))
        })
    }, [])

    return (
        <div className="searchPage">
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {rooms.map(({id, room}) => (
                <SearchResult
                    id={id}
                    img={room.img}
                    location={room.location}
                    title={room.title}
                    description={room.description}
                    star={room.star}
                    price={room.price}
                    total={room.total}
                />
            ))}
        </div>
    )
}

export default SearchPage
