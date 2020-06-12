import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';



const Routes = () => { 
    return (
     <BrowserRouter>
      <Route component={Login} path="/" exact  />
      <Route component={Cadastro} path="/register" />
     </BrowserRouter>
    )
}


 
export default Routes;