import React, { useState } from "react";
import { RouteProps, NavLink, useLocation } from 'react-router-dom';

import { HamburgerMenu } from './HamburgerMenu/index';

import './style.scss';

interface IProps {
  routes: RouteProps[];
}

export function NavBar(props : IProps) {
  const [isHamActive, setHamActive] = useState<boolean>(false);
  const location = useLocation();

  const routes = props.routes;

  const navBarLinks = routes.filter(route => {
    return route.path !== '/'
  });

  function getNavItemName(rawName : RouteProps['path']) {
    // remove '/' from begging
    return rawName?.slice(1, rawName.length);
  }
  

  return (
    <div className={`NavBar-component ${isHamActive ? 'active' : ''}`}>
      <HamburgerMenu
        isActive={isHamActive}
        setActive={setHamActive}
      />

      <div>
        <nav>
          <ul>
            {navBarLinks.map((navBarLink, index) => {
              const isCurrentPath = navBarLink.path === location.pathname;

              return (
                <li 
                  key={index}
                  onClick={() => setHamActive(false)}
                  className={isCurrentPath ? 'current-path' : ''}
                >
                  <NavLink
                    to={String(navBarLink.path)}
                    activeClassName="current-path"
                  >
                    {getNavItemName(navBarLink.path)}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <div
          className="close-nav"
          onClick={() => setHamActive(false)}
        />
      </div>
    </div>
  );
}