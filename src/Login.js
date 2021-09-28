import React, { useState, } from 'react'
import {useHistory} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Login.css'


export default function Login() {
    let history = useHistory();
    
    const [id, setID] = useState();
    const [password, setPassword] = useState(); 
    
    function handleLogin() {
        axios.post('https://wewallet.herokuapp.com/admin-login', {
            id: id,
            password:password
        })
        .then(() => {
            history.push({
                pathname: '/adminpanel',
                state: {
                  authorized:true,
                  id: id
                },
            })
        }, (e) => {
            console.log(e);
        })
        
    }

    return (
        <div className="login">
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Admin ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" onChange={(e)=>{setID(e.target.value)}} />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                 
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Login
                </Button>
                
            </Form>
        </div>
    )
}
