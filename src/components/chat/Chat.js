import React,{useEffect,useContext,useState,useRef} from 'react';
import { UserContext } from '../../UserContext.js';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import Messages from './messages/Messages.js';
import './Chat.css';
import Input from './input/Input.js';
import ScrollToBottom from 'react-scroll-to-bottom';
import './messages/Messages.css'

let socket;

const Chat = () => {
    let form;
    const ENDPT = 'localhost:5000';
    const {user,setUser} = useContext(UserContext);
    const {room_id,room_name} = useParams();
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    const inputRef = useRef();

    useEffect(() => {
        socket = io(ENDPT);
        socket.emit('join',
            {  
                name: user.name,
                room_id,
                user_id:user._id
            })
    }, []);

    useEffect(() =>{
        form = document.getElementById("form");
        console.log(form)
    })

    useEffect(()=>{
        socket.on('message',message =>{
            setMessages([...messages,message]);
        })
    },[messages])

    const sendMessage = (data) =>{
        console.log(data);
        const message = data.message;
        socket.emit('sendMessage',message,room_id);
        form.reset();
    }
    return (
        <div className="outerContainer">
            <div className="container messages">
                <ScrollToBottom className="messages">
                    <Messages messages={messages} user_id={user._id}/>
                </ScrollToBottom>
                <Input className="fixed-bottom" id="form" sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat

//https://codesandbox.io/s/8l2y0o24x9?file=/src/index.js