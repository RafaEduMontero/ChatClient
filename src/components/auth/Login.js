import React,{useEffect,useContext,useState, Fragment} from 'react';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import swal from 'sweetalert';
import ENDPT from '../../path/endpoints';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Login = () => {
    const {user,setUser} = useContext(UserContext);
    const [errorsBack,setErrorsBack] = useState({
        errorName: '',
        errorPassword: '',
        errorEmail: ''
    })
    const history = useHistory();
    let form;
    const { register, handleSubmit, errors } = useForm();
    useEffect(() =>{
        form = document.getElementById("form1");
        console.log(form)
    })
    const login = (data) =>{
        const datos = data;
        Axios.post(ENDPT.login,datos,{withCredentials: true})
             .then(res =>{
                 if(res.data.errors){
                     setErrorsBack({
                        errorName: res.data.errors.name,
                        errorPassword: res.data.errors.password,
                        errorEmail: res.data.errors.email
                     })
                 }
                 if(res.data){
                     console.log(res.data.user)
                     setUser(res.data.user)
                     swal({
                        title: `El usuario ${res.data.user.name} registrado con éxito`,
                        icon: 'success'
                    }).then(res => {
                        if(res){
                            history.push("/")
                        }
                    })
                 }
             })
    }
    return (
        <Fragment>
        <h2>Login</h2>
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
        </Fragment>
    )
}

export default Login
