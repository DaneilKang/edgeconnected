import './App.css';
import React from 'react';
import DrawNav from './components/body/common/draw-nav/DrawNav';
// import DrawerNavigator from './components/navigator';



function App() {
  
  return (
    <div className="App">
      {/** login true go to DrawNav, false Login page */}
      <DrawNav />
        {/* <LoginPage/> */}
      {/* <DrawerNavigator /> */}
    </div>
  );
}

export default App;
