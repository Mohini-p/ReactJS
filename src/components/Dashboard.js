import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand, Card, Button, ListGroup} from 'react-bootstrap'
import {db} from '../firebase-config'

const Dashboard = () => {

    const [ info, setInfo ] = useState([]);
    const arr = [];

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
            {console.log("Inside return")}
            <h1>hello</h1>
            <Card style={{margin:"10px",backgroundColor:"#fff"}}>
              <Card.Body>
                <Card.Img src={i.details.Product_Image} style={{height:"20%",width:"20%"}}></Card.Img>
                {/* <ListGroup>
                  <ListGroup.Item><Card.Img src={i.details.Product_Image} style={{height:"20%",width:"20%"}}></Card.Img></ListGroup.Item>
                  <ListGroup.Item><span style={{fontWeight : "Bold"}}>Name : </span>{i.details.Product_Name}</ListGroup.Item>
                  <ListGroup.Item>Description : {i.details.Product_Desc}</ListGroup.Item>
                  <ListGroup.Item>Price : {i.details.Product_Price}/-</ListGroup.Item>
                  <ListGroup.Item>
                  <div style={{marginTop:"7px"}}>
                    <Button>Add to Cart</Button>
                  </div>  
                  </ListGroup.Item>
                </ListGroup> */}
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
      <Navbar bg='primary' variant='dark' style={{minWidth:"100"}}>
        <Container>
          <NavbarBrand>E-commerce</NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='/Cart'>Cart</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href='/Login'>Login</Nav.Link>
          <Nav.Link href='/Signup'>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    

    <div style={{marginTop:"5px"}}>
      <Card>
        <Card.Body>
          {
            ret
          }    
          {console.log("hello")}      
        </Card.Body>
      </Card>
    </div>
    </div>
  )
}
export default Dashboard
