import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
             <Signup/>
          </AuthProvider>
      </div>
    </Container>
  )
}

export default App

// import React from "react";
// import { Container } from "react-bootstrap";
// import { AuthProvider } from "../contexts/AuthContext";
// import Signup  from "./Signup";

// function App() {
//   return (
//     <Container className="d-flex align-item-center justify-content-center" 
//     style={{ minHeight:"100vh" }}
//     >
//       <AuthProvider>
//           <div className="w-100" style={{ maxWidth:"400px" }}>
//             <Signup/>
//             </div>
//       </AuthProvider>
//       </Container>
//   )
// }

// export default App;
