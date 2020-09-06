import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Dashboard from './pages/Dashboard';



const Routes = () => { 
    return (
     <BrowserRouter>
      <Route component={Login} path="/" exact  />
      <Route component={Cadastro} path="/register" />
      <Route component={Dashboard} path="/dashboard" />
     </BrowserRouter>
    )
}


 
export default Routes;