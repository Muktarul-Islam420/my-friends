import React from 'react';
import { useContext } from 'react';
import { MyFriends } from '../Home/Home';

const Friends = () => {
    const friends = useContext(MyFriends);
    // const {img, name} = friends;
    console.log(friends.name);
    console.log(friends);

    return (
        <div>
            <h1> Friends</h1>
        </div>
    );
};

export default Friends;