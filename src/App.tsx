import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect
} from 'react-router-dom';

import { About } from './pages/About/index';
import { Projects } from './pages/Projects/index';
import { Contact } from './pages/Contact/index';
import { Admin } from './pages/Admin/index';
import { NavBar } from './components/NavBar/index';

import './styles/app.scss';

function App() {
  const routes : RouteProps[] = [
    {
      path: '/sobre',
      exact: true,
      component: About,
    },
    {
      path: '/projetos',
      exact: true,
      component: Projects,
    },
    {
      path: '/contato',
      exact: true,
      component: Contact,
    },
    {
      path: '/admin',
      exact: true,
      component: Admin,
    },
    {
      path: '/',
      component: redirectToAboutPage,
    },
  ]

  function redirectToAboutPage() {
    return (
      <Redirect to="/sobre" />
    );
  }

  return (
    <BrowserRouter>
      <NavBar routes={routes} />

      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;