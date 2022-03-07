import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  return (
    <div>
    <Container>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
    </Container>
    </div>
  );
}

export default App;
