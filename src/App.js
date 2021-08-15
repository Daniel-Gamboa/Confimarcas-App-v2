// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBarComponent } from './components/NavBar';
import { HomeContainer } from './containers/HomeContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
        <Switch>
            <Route exact path={'/'}>
              <HomeContainer greeting={'¡Conoce nuestras categorias!'} />
            </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
