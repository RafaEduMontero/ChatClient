import React from 'react'
import { useForm } from "react-hook-form";

const Input_field = ({room,setRoom,crearSala}) => {
    const { register, handleSubmit, errors } = useForm();
    
    return (
        <form>
            <div className="row">
                <div className="input-field col s12">
                    <input name="room" placeholder="Ingrese un nombre para la Sala" id="room" type="text" className="validate" ref={register}/>
                    <label htmlFor="room">Sala</label>
                </div>
            </div>
            <button onClick={handleSubmit(crearSala)} className="btn">CREAR NUEVA SALA</button>
        </form>
    )
}

export default Input_field
