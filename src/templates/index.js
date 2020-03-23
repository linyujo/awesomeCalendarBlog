/* eslint react/prop-types: 0 */
import React from 'react';
import Link from 'gatsby-link';

import { ForwardCard, BackwardCard } from '../components/Card';
import Sidebar from '../components/Sidebar';
import ShareBox from '../components/ShareBox';
import Headline from '../components/Headline';

import './index.scss';

const NavLinkText = ({ color, text }) => (
  <div
    className="navlink"
    style={{
      color,
    }}
  >
    {text}
  </div>
);

const NavLink = ({ test, url, text }) => {
  if (!test) {
    return <NavLinkText color="#7d7d7d" text={text} />;
  }

  return (
    <Link to={`${url}`}>
      <NavLinkText color="#66ccff" text={text} />
    </Link>
  );
};

const Page = ({ pageContext, location }) => {
  const {
    group, index, first, last, pathPrefix,
  } = pageContext;

  console.log('group', group);

  const previousUrl = index - 1 === 1 ? '' : `/${pathPrefix}/${index - 1}`;
  const nextUrl = `/${pathPrefix}/${index + 1}`;

  const latestPost = group[0];

  return (
    <div className="homepage">
      <div className="container">
        <div className="row">
          <Headline {...latestPost.node.frontmatter} />
          {group.slice(1).map(({ node }, index) => (
            index % 3 !== 1 ?
            <ForwardCard {...node.frontmatter} key={node.fields.slug} />
            :
            <BackwardCard {...node.frontmatter} key={node.fields.slug} />
          ))}
          {/* <Sidebar />
        <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
          {group.map(({ node }) => (
            <Card {...node.frontmatter} key={node.fields.slug} />
          ))}

          <div
            className="row"
            style={{
              justifyContent: 'space-around',
              marginBottom: '20px',
            }}
          >
            <div className="previousLink">
              <NavLink test={!first} url={previousUrl} text="Previous" />
            </div>
            <div className="nextLink">
              <NavLink test={!last} url={nextUrl} text="Next" />
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-1 order-3" /> */}
        </div>
      </div>
      {/* <ShareBox url={location.href} hasCommentBox={false} /> */}
    </div>
  );
};

export default Page;
