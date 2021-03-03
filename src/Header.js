import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import {useDispatch} from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {

    

    const dispatch = useDispatch();    
    const logoutOfApp =() => {
        dispatch(logout());
        auth.signOut();
    };

    return (
         <div className = "header" >
            <div className = "header_left" >
                <img src = "https://www.flaticon.com/svg/vstatic/svg/1384/1384046.svg?token=exp=1613470751~hmac=93e2ab872b6976b9a7b37202065b38b9"
                        alt = "" />
                    <div className = "header_search" > 
                        { /* SEARCH ICON */ } 

                        <SearchIcon/>
                        <input placeholder = "Search" type = "text"/>
                    </div>   
            </div> 
            <div className = "header_right">
                <HeaderOption Icon = {HomeIcon} title = "Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title = "My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title = "Jobs"/>
                <HeaderOption Icon={ChatIcon} title = "Messging"/>
                <HeaderOption Icon={NotificationIcon} title = "Notifications"/>
                <HeaderOption avatar={true} title = "Me" onClick={logoutOfApp}/>
            </div>
         </div>
    );
}

export default Header;