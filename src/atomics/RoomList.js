import React,{Fragment} from 'react'
import Room from './Room';
import { Link } from 'react-router-dom';

const RoomList = ({rooms}) => {
    return (
        <Fragment>
            {rooms.map((room,i) =>{
                return(
                    <Link key={i} to={'/chat/'+room._id+'/'+room.name}>
                        <Room room={room} i={i}/>
                    </Link>
                )
            })}
        </Fragment>
    )
}

export default RoomList
