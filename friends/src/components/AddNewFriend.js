import React, {useState,useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export const AddNewFriend = props => {
    const [newFriend, setNewFriend] = useState({});

    const submit = e =>{
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res=>{
                console.log('res from AddNewFriend',res)
                props.setFriendsList(res.data)
            })
            .catch(err => console.log(err.response))
        setNewFriend({
            name: "",
            email: "",
            age: ""
        });
    }

    const handleChange = e =>{
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={submit}>
            Name:<input
                type="text"
                name="name"
                value={newFriend.name}
                onChange={handleChange}
            />
            Email:<input
                type="email"
                name="email"
                value={newFriend.email}
                onChange={handleChange}
            />
            Age:<input
                type="number"
                name="age"
                value={newFriend.age}
                onChange={handleChange}
            />
            <button type="submit">Add a new friend</button>
        </form>
    );
};