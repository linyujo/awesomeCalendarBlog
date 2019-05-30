import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

import { config } from '../../../data';

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

const Header = ({

}) => (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <div className="group_left">
            <img className="logo" src={iconUrl} alt="Raine" />
            <div className="title">{title}</div>
          </div>
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
    </div>
  );

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
