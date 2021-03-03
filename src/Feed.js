

import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';
import FlipMove from "react-flip-move";



function Feed() {

    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setposts] = useState([]);

    useEffect (() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot =>(
            setposts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
                )))
        ));
    }, []);

    const sendPost= e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message:input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };
    return (
        <div className = "feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="rgb(223, 107, 12)"/>
                    <InputOption Icon={SubscriptionIcon} title="Video" color="green"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="skyblue"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Artical" color="purple"/>
                </div>
            </div>
            {/* POSTS */}
            <FlipMove>
                {posts.map(({id, data:{name, description,message, photoUrl} }) =>(

                <Post key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed;
