import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";

import { About } from "./pages/About/index";
import { Projects } from "./pages/Projects/index";
import { Contact } from "./pages/Contact/index";
import { NavBar } from "./components/NavBar/index";

import "./styles/app.scss";

function App() {
  function redirectToAboutPage() {
    return <Redirect to="/sobre" />;
  }

  const routes: RouteProps[] = [
    {
      path: "/sobre",
      exact: true,
      component: About,
    },
    {
      path: "/projetos",
      exact: true,
      component: Projects,
    },
    {
      path: "/contato",
      exact: true,
      component: Contact,
    },
    {
      path: "/",
      component: redirectToAboutPage,
    },
  ];

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
              key={index}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
