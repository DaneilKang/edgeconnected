import './App.css';
import React, { useEffect, useState } from 'react';
import DrawNav from './components/body/common/draw-nav/DrawNav';
import { UserContext } from './components/context/UserContext';
import AuthService from './service/auth.service';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if(user) setCurrentUser(user);
  }, []);

  const logOut = () => {
    AuthService.logout();
  };


  return (
    <div className="App">
      <UserContext.Provider value={{currentUser, setCurrentUser, logOut}}>
        <DrawNav />
      </UserContext.Provider>
    </div>
  );
}

export default App;
