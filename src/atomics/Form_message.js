import React from 'react';
import { useForm } from "react-hook-form";

const FormMessage = ({sendMessage,id,className}) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <div className={`row ${className}`}>
            <form className="col s12" id={id}>
                <div className="row">
                    <div className="input-field col s12">
                    <textarea name="message" ref={register} id="textarea1" className="materialize-textarea"/>
                    <label htmlFor="textarea1">Mensaje</label>
                    </div>
                </div>
                <button className="btn blue" onClick={handleSubmit(sendMessage)}>Enviar</button>
            </form>
        </div> 
    )
}

export default FormMessage;