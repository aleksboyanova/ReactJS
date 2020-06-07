import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './app/layouts/MainLayout';
import Home from './app/pages/Home';
import Crud from './app/pages/Crud';
import HTTP from './app/pages/HTTP';

class App extends Component {

  render() {
    return (<Router>
      <MainLayout>
        <Route path={"/crud"} component={Crud} />
        <Route path={"/http"} component={HTTP} />
      </MainLayout>
      <Route path={"/"} exact component={Home} />
    </Router>
    )
  }
}

export default App;
