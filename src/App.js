import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
     <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Simons Cafe</NavbarBrand>
          </div>
        </Navbar>  
    </div>
  );
}

export default App;
