import React,{useEffect,useContext} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Axios from 'axios';
import swal from 'sweetalert';

import ENDPT from '../path/endpoints';

const FormSignup = () => {
    const {user,setUser} = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    let form;
    useEffect(() =>{
        form = document.getElementById("form1");
        console.log(form)
    })

    const signUp = (data) =>{
        const datos = data;
        Axios.post(`${ENDPT.signup}`,datos).then(res =>{
            swal({
                title: `${datos.name.toUpperCase()} Registrado con Éxito`,
                icon: "success",
              }).then(res =>{
                  if(res){
                      form.reset();
                      setUser(datos);
                      history.push("/");
                  }
              });
        }).catch(error =>{
            console.log(error)
            swal({
                title: 'Error/es',
                text: `${error}`
            })
        });
    }
    return (
        <form id="form1" className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <input name="name" ref={register({ required: true })} id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">Nombre</label>
                    {errors.name && "El nombre es requerido"}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input name="email" ref={register({ required: true })} id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                    {errors.email && "El email es requerido"}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input name="password" ref={register({ required: true })} id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                    {errors.password && "El password es requerido"}
                </div>
            </div>
            <button onClick={handleSubmit(signUp)} className="btn green">Sign up</button>
        </form>
    )
}

export default FormSignup
