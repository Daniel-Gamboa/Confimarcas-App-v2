// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { NavBarComponent } from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;
