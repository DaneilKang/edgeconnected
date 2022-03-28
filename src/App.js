import './App.css';
import React, { useEffect, useState } from 'react';
import DrawNav from './components/body/common/draw-nav/DrawNav';
import { UserContext } from './components/context/UserContext';
import AuthService from './service/auth.service';
import setAuthorizationToken from './service/setAuthorizationToken';
import Roles from './components/roles/Roles';
import LoginForm from './components/login/LoginForm';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentUserRole, setCurrentUserRole] = useState(undefined);
  const localStorageToken = localStorage.jwtToken;

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    const role = AuthService.getCurrentUserRole();

    if(user){
      setCurrentUser(user);
      setCurrentUserRole(role);
    } 

  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  setAuthorizationToken(localStorage.jwtToken);

  return (
    <div className="App">
      <UserContext.Provider value={{currentUser, currentUserRole, setCurrentUserRole, setCurrentUser, logOut}}>
        {
          localStorageToken 
          ? localStorage.getItem('role') 
            ? <DrawNav /> 
            : <Roles /> 
          : <LoginForm/>
        }
        </UserContext.Provider>
    </div>
  );
}

export default App;
