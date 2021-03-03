import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import Image from './img/1875750.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {


    const user = useSelector(selectUser);

    const recentItem = (topic) => ( 
    <div className = "sidebar_recentItems" >
        <span className = "sidebar_hash" > # </span>
         <p> { topic } </p>
    </div>
    );

    return ( 
        <div className = "sidebar">
            <div className = "sidebar_top">
                <img src = { Image }
                alt = "" />
                <Avatar src = { user.photoUrl }
                className = "sidebar_avatar" > { user.email[0] } </Avatar>
                <h2> { user.displayName } </h2>
                <h4> { user.email } </h4>
            </div> 
        <div className = "sidebar_stats">
             <div className = "sidebar_stat" >
                    <p> Who Viewed You </p> 
                    <p className = "sidebar_statNumber"> 2,534 </p>
            </div>
            <div className = "sidebar_stat" >
                <p> Views On Posts </p>
                <p className = "sidebar_statNumber" > 3,543 </p>
            </div>
        </div>
        <div className = "sidebar_bottom">
        <p> Recents </p> 
        { recentItem('react.js') } 
        { recentItem('Programming') } 
        { recentItem('UI/UX') } 
        { recentItem('Web Development') } 
        { recentItem('design') } 
        { recentItem('developer') } 
        </div>
    </div>
    );
}

export default Sidebar;