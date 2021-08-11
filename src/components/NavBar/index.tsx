import React from "react";
import { RouteProps, NavLink } from 'react-router-dom';

// import './style.scss';

interface IProps {
  routes: RouteProps[];
}

export function NavBar(props : IProps) {
  const routes = props.routes;

  const navBarLinks = routes.filter(route => {
    return route.path !== '/' && route.path !== '/admin'
  });

  return (
    <nav className="NavBar">
      <ul>
        {navBarLinks.map((navBarLink, index) => {
          return (
            <li key={index}>
              <NavLink
                to={String(navBarLink.path)}
                activeClassName="current-path"
              >
                {navBarLink.path?.length}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}