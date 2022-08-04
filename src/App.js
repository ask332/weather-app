import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Weather from './Weather';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Weather />
      </Container>
    </div>
  );
}

export default App;
