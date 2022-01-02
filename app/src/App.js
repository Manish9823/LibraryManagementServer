import { Login } from './login/login';
import { User } from './user/user'
import { Admin } from './admin/admin'
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Registration } from './login/component/registration';
import { Profile } from './user/profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/user' element={<User />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
