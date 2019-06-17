import React from 'react';
import { Link } from 'gatsby';

import { parseImgur } from '../../api/images';

import './index.scss';

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
});

const SquareImage = ({
  url,
  image,
  backgroundColor,
}) => (
  <div className="squareImage">
    <Link to={url} href={url}>
      <div className="imageBox">
        <div className="imageBox-inner">
          <div className="image" style={imageStyle(image, backgroundColor)} />
        </div>
      </div>
    </Link>
  </div>
);

export default SquareImage;
