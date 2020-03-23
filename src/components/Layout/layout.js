/* eslint-disable react/prop-types */
import React from 'react';

import Transition from '../Transition';
import Navbar from '../Navbar';
import Head from './Head';
import Header from '../Header';
import Footer from '../Footer';
import ScrollWrapper from '../ScrollWrapper';

import './index.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a', { offset: 60 });
}

class Layout extends React.Component {
  state = {
    isScroll: false,
    isScrollDown: false,
  };
  handleScroll(isScroll) {
    this.setState({ isScroll: isScroll });
  }
  handleScrollDown(isScrollDown) {
    this.setState({ isScrollDown: isScrollDown });
  }
  render() {
    const { location } = this.props;
    const { isScrollDown } = this.state;
    return (
      <div className="layout">
        <Head />z
        <Header location={location} isScrollDown={isScrollDown} />
        {/* <Navbar location={location} /> */}
        <Transition location={location}>
          <ScrollWrapper
            scrollingHandler={(isScroll) => this.handleScroll(isScroll)}
            scrollDownHandler={(isScrollDown) => this.handleScrollDown(isScrollDown)}>
            <div>{this.props.children}</div>
          </ScrollWrapper>
        </Transition>
        {/* {<Footer />} */}
      </div>
    );z
  }
}

// const Layout = ({ children, location }) => {
//   return (
//     <div className="layout">
//       <Head />
//       <Header location={location} />
//       {/* <Navbar location={location} /> */}
//       <Transition location={location}>
//         <ScrollWrapper>
//           <div>{children}</div>
//         </ScrollWrapper>
//       </Transition>
//       {/* {<Footer />} */}
//     </div>
//   );
// }

// Layout.propTypes = {
//   children: PropTypes.object.isRequired,
//   location: PropTypes.any
// };

export default Layout;
