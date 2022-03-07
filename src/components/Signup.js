import React, { Fragment, useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import {Card,Form,Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { auth } from '../firebase-config'
import firebase from 'firebase/compat/app'

const Signup = () => {

    const [ registerMail , setRegisterMail ] = useState("");
    const [ registerPassword , setRegisterPassword ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState("");


    const register = async () => {
        try{
             const user = await createUserWithEmailAndPassword(
                 auth,
                 registerMail,
                 registerPassword
                 );
            console.log(user);
            alert('Successful');
        } catch(error){
          //alert("Cant sign up!")
          setErrorMsg("Password is too short!");
          alert(error.code);
        }
    };

    const userChk = () =>{
      var user = firebase.auth().currentUser;
      if(user)
      {
        alert("Successfully Registered!");
        <a href='/Dashboard'></a>
      }else{
        alert("Can't Register :<");
      }
    }


  return (
    <div className="d-flex align-items-center justify-content-center"  style={{ minHeight: "100vh"}}>
    <Card>
      <Card.Body style={{width :"400px"}}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form>
          <Form.Group id="email">
            <Form.Label>Email :</Form.Label>
            <Form.Control type="email" onChange={
                (event)=>{
                    setRegisterMail(event.target.value);
                }} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password :</Form.Label>
            <Form.Control type="password" onChange={
                (event)=>{
                    setRegisterPassword(event.target.value);
                }}required />
          </Form.Group>
          {/* <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" required />
          </Form.Group> */}
          <Button className="w-100 mt-3" type="submit" onClick={register}>
            Sign Up
          </Button>
        </Form>
      </Card.Body>
      <div className="w-100 text-center mt-2">
      Already have an account?<a href='Login' style={{ textDecoration:"none"}}> Log In </a>
      <br/>
      {errorMsg && <><span variant='danger'>{errorMsg}</span></>} 
    </div>
    </Card>
    
  </div>
  )
}

export default Signup
