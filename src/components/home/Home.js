import React,{useState,useEffect,useContext} from 'react'
import Card_field from '../../atomics/Card_field';
import { UserContext } from '../../UserContext.js';
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';

let socket;

const Home = () => {
    const {user,setUser} = useContext(UserContext);
    const history = useHistory();
    const [room,setRoom] = useState('');
    const[rooms,setRooms] = useState([]);
    const ENDPT = 'localhost:5000';
    useEffect(() => {
        socket = io(ENDPT);
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPT]);

    useEffect(() => {
        socket.on('output-rooms',rooms =>{
            setRooms(rooms)
        })
    }, [])

    useEffect(() => {
        socket.on('room-created',room =>{
            setRooms([...rooms,room])
        } )
    }, [rooms]);

    useEffect(() =>{
        console.log(rooms);
    },[rooms]);

    const crearSala = (data) =>{
        console.log(data);
        const room = data.room;
        socket.emit('create-room',room );
    }

    console.log(user)
    if(!user){
        history.push("/login")
    }
    return (
        <div>
            <Card_field user={user} rooms={rooms} crearSala={crearSala} soket={socket} room={room} setRoom={setRoom}/>
        </div>
    )
}

export default Home
