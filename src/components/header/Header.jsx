import React from "react";
import "./header.css";
import { Container } from "reactstrap";
export default function header() {
  <header className="header">
    <Container>
      <div className="navigation">
        <div className="logo">
          <h2>
            <span>
              <i className="ri-restaurant-2-line"></i>
            </span>
            Chef Food
          </h2>
        </div>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#">Home</a>
            </li>
            <li className="nav__item">
              <a href="#">About</a>
            </li>
            <li className="nav__item">
              <a href="#">Menu</a>
            </li>
            <li className="nav__item">
              <a href="#">Recipes</a>
            </li>
            <li className="nav__item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="menu__right">
          <div className="custom__search">
            <input type="text" placeholder="search item..." />
            <span>
              <i className="ri-search-line"></i>
            </span>
          </div>
        </div>

        <div className="mobile__menu">
          <span>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </Container>
  </header>;
}
