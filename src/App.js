import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import {auth} from './firebase';
import Login from './Login';
import Widgets from './Widgets';


function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //user is logged in\
                dispatch(login({
                    email:userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoUrl,
                }));
            } else {
                //user is logged out
                dispatch(logout());
            }
        });
    }, []);

    return ( 
        <div className = "app">
            { /* HEADER */ } 
            <Header />

            {!user ? (
                 <Login/>
                 ) : (
                     <div className="app_body">
                        
                         <Sidebar/>
                         <Feed/>
                        
                        { /* WIDGETS */ }  
                        <Widgets/> 
                    </div>
                )}
        </div>
    );
}

export default App;