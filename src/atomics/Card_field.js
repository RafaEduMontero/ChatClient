import React from 'react'
import Input_field from './Input_field'
import RoomList from './RoomList'

const Card_field = ({user,room,setRoom,crearSala,rooms,setAsFlor,setAsRafa}) => {
    console.log(user)
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Bienvenido {user? user.name : ''}</span>
                        <Input_field crearSala={crearSala} room={room} setRoom={setRoom}/>
                    </div>
                    <div className="card-action">
                        <a href="#" onClick={setAsRafa}>Soy Rafa</a>
                        <a href="#" onClick={setAsFlor}>Soy Flor</a>
                    </div>
                </div>
            </div>
            <div className="col s12 m6">
                <RoomList rooms={rooms}/>
            </div>
        </div>
    )
}

export default Card_field
