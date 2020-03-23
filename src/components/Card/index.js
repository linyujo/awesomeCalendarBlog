import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/zh-tw'

import Tag from '../Tag';
import SquareImage from '../SquareImage';

import { parseImgur } from '../../api/images';

import './index.scss';

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
});

const CardHeader = ({ url, image, backgroundColor }) => (
  <Link to={url} href={url}>
    <div className="imageBox">
      <div className="imageBox-inner">
        <div className="image" style={imageStyle(image, backgroundColor)} />
      </div>
    </div>
  </Link>
);

const CardWrapper = ({
  direction,
  children
}) => (
  <div className="col-sm-6 col-md-4 u-padding0">
      <div className={`custom-card ${direction}`}>
        {children}
      </div>
  </div>
);

const ArticleInfo = ({
  url,
  title,
  subTitle,
  tags,
  description,
  date,
}) => (
  <div className="artcleInfo">
    <div className="info-wrapper">
      <div className="content">
        <div className="date">{moment(date).format('YY.MM.DD')}</div>
        <Link to={url} href={url}>
          <h3 className="title">{title}</h3>
          <h4 className="subTitle">{subTitle}</h4>
        </Link>
        <div className="stats">
          {tags.map(name => (
            <Tag name={name} key={name} />
          ))}
        </div>
        {/* <p className="description">{description}</p> */}
       
      </div>
    </div>
  </div>
);


const BackwardCard = ({
  url,
  headerImage,
  headerBackgroundColor,
  ...props
}) => (
  <CardWrapper direction="backward">
    <ArticleInfo
      {...props}
      url={url} />
    {headerImage && (
      <Link to={url} href={url}>
        <SquareImage
          image={headerImage}
          backgroundColor={headerBackgroundColor} />
      </Link>
    )}
    
  </CardWrapper>
);

const ForwardCard = ({
  url,
  headerImage,
  headerBackgroundColor,
  ...props
}) => (
  <CardWrapper direction="forward">  
    {headerImage && (
      <Link to={url} href={url}>
        <SquareImage
          image={headerImage}
          backgroundColor={headerBackgroundColor} />
      </Link>
    )}
    <ArticleInfo
      {...props}
      url={url} />
  </CardWrapper>
);

BackwardCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

// CardHeader.propTypes = Card.propTypes;

BackwardCard.defaultProps = {
  headerImage: '',
  tags: [],
  date: '',
  headerBackgroundColor: '',
};

export {
  BackwardCard,
  ForwardCard
};
