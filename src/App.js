import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import './App.css'; 

const App = () => {
  return (
    <Router>
      {/* <div>
        <Routes>
          <Route path='/' exact element={<PrivateRoute/>}/>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Login} />
        </Routes>
      </div> */}
      <Login/>

    </Router>
  );
};

export default App;
