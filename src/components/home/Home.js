import React,{useState,useEffect,useContext} from 'react'
import Card_field from '../../atomics/Card_field';
import { UserContext } from '../../UserContext.js';
import io from 'socket.io-client';

let socket;

const Home = () => {
    const {user,setUser} = useContext(UserContext);
    const setAsRafa = () =>{
        const rafa = {
            name: 'Rafa',
            email: 'rafaedumontero@gmail.com',
            password: 'rafael123',
            id: '123'
        }
        setUser(rafa);
    }
    const setAsFlor = () =>{
        const flor = {
            name: 'Flor',
            email: 'florlegui@gmail.com',
            password: 'florencia123',
            id: '456'
        }
        setUser(flor);
    }
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
    console.log(rooms)
    return (
        <div>
            <Card_field setAsFlor={setAsFlor} setAsRafa={setAsRafa} user={user} rooms={rooms} crearSala={crearSala} soket={socket} room={room} setRoom={setRoom}/>
        </div>
    )
}

export default Home
