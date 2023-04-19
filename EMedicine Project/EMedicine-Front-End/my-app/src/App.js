import logo from './logo.svg';
import './App.css';
import {BrowserRouter as router,Switch,Route, Link} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import CustomerList from './components/admin/CustomerList';
import Order from './components/users/Orders';
import MedicineDisplay from './components/users/MedicineDisplay';

function App() {
  return (
    <div className="App">
      <header className='AppHeader'>
        <h1>This is Main page!</h1>
        <Router>
          
          <Switch>
            <Route path='/' excat>
              <Login/>
              <Link to ='./Registration'> Move to the Register</Link>
            </Route>

            <Route path='/Register'>
              <Registration/>
              <Link to ='./'>Move to Login Page </Link>
            </Route>

            <Route path='/CustomerList'>
              <CustomerList/>
            </Route>

            <Route path='/Order'>
              <Order/>
            </Route>
            
            <Route path='/MedicineDisplay'>
              <MedicineDisplay/>
            </Route>
          </Switch>
        </Router>
        

      </header>
    </div>
  );
}

export default App;
