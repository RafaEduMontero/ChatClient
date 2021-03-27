import React,{useEffect,useContext} from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import swal from 'sweetalert';
import ENDPT from '../../path/endpoints';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Login = () => {
    const {user,setUser} = useContext(UserContext);
    const history = useHistory();
    let form;
    const { register, handleSubmit, errors } = useForm();
    useEffect(() =>{
        form = document.getElementById("form1");
        console.log(form)
    })
    const login = (data) =>{
        const datos = data;
        console.log(datos)
        Axios.post(`${ENDPT.login}`,datos).then(res =>{
            swal({
                title: `Bienvenido`,
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
            <button onClick={handleSubmit(login)} className="btn green">Login</button>
        </form>
    )
}

export default Login
