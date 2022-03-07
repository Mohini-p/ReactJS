import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <div>
    <Container>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
    </Container>
    </div>
  );
}

export default App;
