import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import {db} from '../firebase-config'
import AppNavbar from './AppNavbar'
import { auth } from "../firebase-config"
import firebase from 'firebase/compat/app'

const Dashboard = () => {

    const [ info, setInfo ] = useState([]);
    const arr = [];

    
    function GetCurrentUser()
    {
    const [ user, setUser] = useState("");
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(user){
          setUser(user.email);
          console.log("id :"+user.uid);
          console.log("mail :"+user.email);
        }
        else{
          console.log("lol");
          setUser("");
        }
      })
    },[])
    return user;
    }

    const user = GetCurrentUser();


    const ProductData = async() =>{
      const dbres = db.collection('Product');
      const data = await dbres.get();
      data.docs.forEach(ele =>{
        arr.push({details:ele.data()})
      })
      setInfo(arr)
      console.log(arr);
    }

    useEffect(()=>{
      ProductData();
    },[])
    console.log(info);


    const ret = info.map(i=>
      {
        return(
          <div>
            <Card style={{margin:"10px",backgroundColor:"#fff"}}>
              <Card.Body>
                <Card.Img src={i.details.Product_Image} style={{height:"20%",width:"20%"}}></Card.Img>
                <Card.Text style={{marginTop:"7px"}}><span style={{fontWeight : "Bold"}}>Name : </span>{i.details.Product_Name}</Card.Text>
                <Card.Text><span style={{fontWeight : "Bold"}}>Description : </span> {i.details.Product_Desc}</Card.Text>
                <Card.Text><span style={{fontWeight : "Bold"}}>Price : </span> {i.details.Product_Price}/-</Card.Text>
                <div style={{marginTop:"7px"}}>
                  <Button>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          )
      })

  return (
    <div style={{margin:"10px"}}>

     <AppNavbar user={user} />

    <div style={{marginTop:"5px"}}>
      <Card>
        <Card.Body>
          {
            ret
          }        
        </Card.Body>
      </Card>
    </div>
    </div>
  )
}
export default Dashboard
