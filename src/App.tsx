import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

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
