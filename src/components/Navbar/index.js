import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

import GithubCorner from '../GithubCorner';

import NavItem from './NavItem';
import { gotoPage } from '../../api/url';
import './index.scss';
import { config } from '../../../data';

const { navbarList = [] } = config;

const NavbarClass = [
  'navbar',
  'navbar-expand-md',
  'sticky-top',
  'custom-navbar',
];

const Navbar = () => (
  <nav className="container">
    <div className="navWrapper u-paddingTop30 u-paddingBottom25">
      <ul className="navGroup">
        {navbarList.map(item => (
          <NavItem
            url={item.href}
            name={item.title}
            list={item.list}
            key={item.href}
          />
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
