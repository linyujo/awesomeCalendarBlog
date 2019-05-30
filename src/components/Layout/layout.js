/* eslint-disable react/prop-types */
import React from 'react';

import Transition from '../Transition';
import Navbar from '../Navbar';
import Head from './Head';
import Header from '../Header';
import Footer from '../Footer';
import './index.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a', { offset: 60 });
}

const Layout = ({ children, location }) => (
  <div className="layout">
    <Head />
    <Header />
    <Navbar location={location} />
    <Transition location={location}>
      <div>{children}</div>
    </Transition>
    {/* {<Footer />} */}
  </div>
);

// Layout.propTypes = {
//   children: PropTypes.object.isRequired,
//   location: PropTypes.any
// };

export default Layout;
