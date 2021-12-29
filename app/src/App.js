import { Login } from './login/login';
import {User} from './user/user'
import {Admin} from './admin/admin'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <h2>jkfsjk</h2>
      <Route path="/" component={Login} exact />
      <Route path="/user" component={User} />
      <Route path="/admin" component={Admin} />
    </BrowserRouter>    
  );
}

export default App;
