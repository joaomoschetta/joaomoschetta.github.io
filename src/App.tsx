import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { About } from './pages/About/index';
import { Projects } from './pages/Projects/index';
import { Contact } from './pages/Contact/index';
import { Admin } from './pages/Admin/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/projetos'
          exact
          component={Projects}
        />
        <Route
          path='/contato'
          exact
          component={Contact}
        />
        <Route
          path='/admin'
          exact
          component={Admin}
        />
        <Route
          path='/'
          component={About}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
