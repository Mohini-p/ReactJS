import React, { useState } from 'react'
import { Card, Form, Button, Alert  } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { async } from '@firebase/util';
import { signInWithEmailAndPassword , onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config'

const Login = () => {
    const [ loginEmail, setLoginEmail ] = useState("");
    const [ loginPassword, setLoginPassword ] = useState("");

     const [ user, setUser] = useState({});

    // onAuthStateChanged(auth,(currentUser)=>{
    //     setUser(currentUser);
    // })

    const login = async () =>{
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            alert("logged in!");
            console.log(user);
        }catch(error){
            alert("Cant log in!!");
            console.log(error.message);
        }
        console.log("Logged in!");
    };

  return (
    <div className="h-100 d-flex align-items-center justify-content-center"  style={{ minHeight: "100vh"}}>
        <Card>
            <Card.Body style={{width :"400px"}}>
            <h2 className="text-center mb-4">Login</h2>
            {/* <Alert variant='success'>This is the message</Alert> */}
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control type="email" required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password :</Form.Label>
                        <Form.Control type="password" required/>
                    </Form.Group>
                    <Button className="w-100 mt-3" type="submit" onClick={login}>
                     Login
                    </Button>
                </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
            Don't have an Account? <a href='Signup' style={{ textDecoration:"none"}}> SignUp </a>
            {/* <br/><h3>{auth.currentUser.email}</h3> */}
        </div>
        </Card>
    </div>
  )
}

export default Login