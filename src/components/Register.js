import React ,{ useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import {Card,Form,Button} from "react-bootstrap"
import { auth } from '../firebase-config'

const Register = () => {

    const [ registerMail , setRegisterMail ] = useState("");
    const [ registerPassword , setRegisterPassword ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState("");

    
    const register = async (e) =>{
        e.preventDefault();
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerMail,
                registerPassword
                );
            alert("Register Successful!");
            window.location = '/';
        }catch(err){
            console.log(err.message);
            setErrorMsg(err.message);
        }
        
       
    };


  return (
    <div>
      <div className="d-flex align-items-center justify-content-center"  style={{ minHeight: "100vh"}}>
    <Card>
      <Card.Body style={{width :"400px"}}>
        <h2 className="text-center mb-4">Registration Form</h2>
        <Form>
          <Form.Group id="email">
            <Form.Label>Email :</Form.Label>
            <Form.Control type="email" onChange={
                (event)=>{
                    setRegisterMail(event.target.value);
                }} value={registerMail} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password :</Form.Label>
            <Form.Control type="password" onChange={
                (event)=>{
                    setRegisterPassword(event.target.value);
                }} value={registerPassword} required />
          </Form.Group>
          <Button className="w-100 mt-3" type="submit" onClick={register} >
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
    </div>
  )
}

export default Register
