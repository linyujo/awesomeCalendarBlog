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

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  tags,
}) => (
    <div className="col-sm-6 col-md-4 u-paddingTop60">
      <div className="pb-4">
        <div className="custom-card">
          {headerImage && (
            <SquareImage
              url={url}
              image={headerImage}
              backgroundColor={headerBackgroundColor} />
            // <CardHeader
            //   url={url}
            //   image={headerImage}
            //   backgroundColor={headerBackgroundColor}
            // />
          )}
          <div className="data">
            <div className="content">

              <Link to={url} href={url}>
                <h3 className="title">{title}</h3>
              </Link>
              <div className="stats">
                {tags.map(name => (
                  <Tag name={name} key={name} />
                ))}
              </div>
              <p className="description">{description}</p>
              {/* <Link to={url} href={url}>
                ....繼續閱讀全文內容
              </Link> */}
              <div className="date">{moment(date).format('MMMM Do YYYY')}</div>
              {/* <div className="date">{date.split('T')[0]}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.propTypes = Card.propTypes;

Card.defaultProps = {
  headerImage: '',
  tags: [],
  date: '',
  headerBackgroundColor: '',
};

export default Card;
