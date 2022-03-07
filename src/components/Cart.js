import React from 'react'
import { Card } from 'react-bootstrap'
import AppNavbar from './AppNavbar'
import { auth } from '../firebase-config'
import Dashboard from './Dashboard'


const Cart = () => {

  const user = Dashboard; 
  return (
    <div>
      <div style={{margin:"10px"}}>
        <AppNavbar user={user} />
      </div>
      <div style={{marginTop:"5px"}}>
        <Card style={{ marginLeft:"10px", marginRight:"10px "}}>
          <Card.Body>
            <Card.Text>Test</Card.Text>
          </Card.Body>
        </Card>
      </div>
      
    </div>
  )
}

export default Cart
