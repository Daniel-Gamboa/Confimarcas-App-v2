// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter} from 'react-router-dom';
import { NavBarComponent } from './components/NavBar';
import { HomeContainer } from './containers/HomeContainer';
import { ItemListContainer } from './containers/ItemListContainer';
// import { ItemDetailContainer } from './containers/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
        {/* <Switch>
            <Route exact path={'/'}> */}
              <HomeContainer greeting={'¡Conoce nuestras categorias!'} />
            {/* </Route>

            <Route exact path={'/category/:id'}> */}
              <ItemListContainer />
             {/* </Route> */}

            {/* <Route exact path={'/item/:id'}>
              <ItemDetailContainer />
            </Route> */}
        {/* </Switch>  */}
      </BrowserRouter>
    </>
  );
}

export default App;
