import React,{useEffect,useContext, useState, Fragment} from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Axios from 'axios';
import swal from 'sweetalert';

import ENDPT from '../path/endpoints';

const FormSignup = () => {
    const {user,setUser} = useContext(UserContext);
    const [errorsBack,setErrorsBack] = useState({
        errorName: '',
        errorPassword: '',
        errorEmail: ''
    })
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    let form;
    useEffect(() =>{
        form = document.getElementById("form1");
        console.log(form)
    })

    const signUp = async(data) =>{
        const datos = data;
        try {
            const res = await Axios.post(ENDPT.signup,datos,{withCredentials: true})
             .then(res =>{
                 if(res.data){
                     setUser(res.data)
                     swal({
                        title: `El usuario ${datos.name} registrado con éxito`,
                        icon: 'success'
                    }).then(res => {
                        if(res){
                            history.push("/")
                        }
                    })
                 }
             }).catch(e =>{
                 console.log(e.response)
                 if(e.response.data){
                    console.log(e.response.data.errors)
                    const {name,password,email} = e.response.data.errors;
                    setErrorsBack({errorsBack,
                       ['errorName']: name,
                       ['errorPassword']: password,
                       ['errorEmail']: email
                    })
                }
             })
             console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(errorsBack)
    const {errorName,errorEmail,errorPassword} = errorsBack
    return (
        <Fragment>
        <h2>Sign Up</h2>
        <form id="form1" className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <input name="name" ref={register({ required: true })} id="first_name" type="text" className="validate" />
                    <div className="name error red-text">{errorName}</div>
                    <label htmlFor="first_name">Nombre</label>
                    {errors.name && "El nombre es requerido"}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input name="email" ref={register({ required: true })} id="email" type="email" className="validate" />
                    <div className="name error red-text">{errorEmail}</div>
                    <label htmlFor="email">Email</label>
                    {errors.email && "El email es requerido"}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input name="password" ref={register({ required: true })} id="password" type="password" className="validate" />
                    <div className="name error red-text">{errorPassword}</div>
                    <label htmlFor="password">Password</label>
                    {errors.password && "El password es requerido"}
                </div>
            </div>
            <button onClick={handleSubmit(signUp)} className="btn green">Sign up</button>
        </form>
        </Fragment>
    )
}

export default FormSignup
