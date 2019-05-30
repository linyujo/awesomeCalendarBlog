import React from 'react';
import { Link } from 'gatsby';

import { parseImgur } from '../../api/images';

const imageStyle = (headerImage) => ({
    backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
    backgroundPosition: 'center',
});

const Headerline = ({
    image
}) => {
    return (
        <div className="container">
            <div>
                <div className="wrapper" style={imageStyle(image)} />
            </div>
        </div>
    );
};

export default Headerline;