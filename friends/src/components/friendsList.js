import React, {useState,useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const FriendsList = () => {

    const [friendsList, setFriendsList] = useState([]);

    useEffect(()=>{
        const getData = () => {
            axiosWithAuth()
                .get('/api/friends')
                .then(res => {
                    console.log(res);
                    setFriendsList(res.data);
                })
                .catch(err => err.resnopse)
        };

        getData();
    }, [])
    
    return(
        <>
            <h1>My friends</h1>
            <div className="friends-list">
                {
                    friendsList.map(friend => (
                        <div className="each-friend">
                            <h3>Name: {friend.name}</h3>
                            <h3>Email: {friend.email}</h3>
                            <h3>Age: {friend.age}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
}