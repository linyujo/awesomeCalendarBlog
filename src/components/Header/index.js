import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { Transition } from 'react-transition-group';

import { config } from '../../../data';
import Navbar from '../Navbar';

import './index.scss';

const {
  iconUrl,
  title,
  avatar,
  githubUsername,
  about,
} = config;

const Icon = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    rel="external nofollow noopener noreferrer"
    className="custom-icon"
  >
    <span className="fa-layers fa-fw fa-2x">
      <FontAwesomeIcon icon={icon} />
    </span>
  </a>
);

const defaultStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 500,
  display: 'block',
  transform: 'translateY(-100%)',
  transition: 'all 0.3s ease',
};

const transitionStyles = {
  entering: { transform: 'translateY(-100%)' },
  entered: { transform: 'translateY(0)' }, // Transition to component being visible and having its position reset.
  exiting: { transform: 'translateY(-100%)' }, // Fade element out and slide it back up on exit.
};

const FadeInOutHeader = ({ inCondition, children }) => (
  <Transition in={inCondition} timeout={{ enter: 0, exit: 0 }}>
    {
      status => (
        <div style={{
          ...defaultStyles,
          ...transitionStyles[status],
        }}
        >
          {children}
        </div>
      )
    }
  </Transition>
);

const Header = ({
  isScrollDown,
  location,
}) => (
  <FadeInOutHeader inCondition={!isScrollDown}>
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <Link to="/" href="/" className="name group_left">
            <img className="logo" src={iconUrl} alt="Raine" />
            <div className="title">
                Coding By
              <span style={{ color: '#f98686e6' }}> C</span>
              <span style={{ color: '#f3b157de' }}>O</span>
              <span style={{ color: 'yellow' }}>L</span>
              <span style={{ color: '#5fbf5fe8' }}>O</span>
              <span style={{ color: '#7272f7e6' }}>R</span>
              <span style={{ color: '#f97af9e6' }}>S</span>
            </div>
          </Link>
          <div className="group_right">
            <div className="iconGroup">
              <Icon
                href={`https://github.com/${githubUsername}`}
                icon={['fab', 'github']}
              />
            </div>
            <div>
              <Link to={about} href={about} className="name">
                <img className="avatar" src={avatar} alt="Raine" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {(location.pathname !== '/myCalendar') && <Navbar location={location} />}
    </div>
  </FadeInOutHeader>
);

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
