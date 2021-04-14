import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Chat from '../components/chat/Chat';
import Home from '../components/home/Home';
import Navbar from '../components/layout/Navbar';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ENDPOINTS from '../path/endpoints';

const Routes = () => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
            const verifyUser = async () =>{
            try {
                const res = await fetch(ENDPOINTS.verifyUser,{
                    credentials: 'include',
                    headers: {'Content-Type': 'application/json'}
                });
                const data = await res.json();
                console.log(data)
                setUser(data)
            } catch (error) {
                console.log(error)
            }
        }
        verifyUser();
    },[])
    return (
        <Router>
            <div className="App">
                <UserContext.Provider value={ {user, setUser} }>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/chat/:room_id/:room_name" component={ Chat } />
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                    </Switch>
                </UserContext.Provider>
            </div>
        </Router>
    )
}

export default Routes
