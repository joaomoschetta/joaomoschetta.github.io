import React, { ButtonHTMLAttributes } from "react";

import './style.scss';

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  setActive: Function;
}

export function HamburgerMenu({isActive, setActive, ...props} : IProps) {
  return (
    <button
      className={`HamburgerMenu-component ${isActive === true ? 'active' : ''}`}
      onClick={() => setActive(!isActive)}
    >
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </button>
  );
}