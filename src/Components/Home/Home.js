import React, { createContext } from 'react';
import fakeData from '../../fakeData'
import './Home.css';
import { useState } from 'react';
import Friends from '../Friends/Friends';

export const MyFriends = createContext();
const Home = () => {
        // console.log(fakeData);
        const  first15 = fakeData.slice(0,15);
        const [friends,setFriends] = useState(first15);
        
    return (
        <MyFriends.Provider value={friends}>
            <div className="friends-container">
           <div className="friends-name-container">
           <h2>{friends.length}</h2>
               {
                  friends.map(fd => <Friends> </Friends> )
               }
           </div>
           <div className="cart-container">
               <h1>This is card</h1>
           </div>
            </div>
        </MyFriends.Provider>
    );
};

export default Home;