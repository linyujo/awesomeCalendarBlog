import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

import { parseImgur } from '../../api/images';
import Tag from '../Tag';

import "./index.scss";

const imageStyle = (headerImage) => ({
    backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
    backgroundPosition: 'center',
});

const Headerline = ({
    url,
    headerImage,
    headerBackgroundColor,
    title,
    subTitle,
    tags,
    description,
    date,
}) => {
    return (
        <div className="col-sm-12">
            <div className="headline-wrapper">
                <div className="headline-info">
                    <div className="date">{moment(date).format('YY.MM.DD')}</div>
                    <Link to={url} href={url}>
                        <h3 className="title">{title}</h3>
                        <h4 className="subTitle">{subTitle}</h4>
                    </Link>
                    <p className="description">{description}</p>
                    <div className="stats">
                        {tags.map(name => (
                            <Tag name={name} key={name} />
                        ))}
                    </div>
                </div>
                <div className="headline-image">
                    <div className="headline-image__inner">
                        <div className="image" style={imageStyle(headerImage)} />
                    </div>
                </div>
            </div>
            {/* <div className="wrapper" style={imageStyle(image)} /> */}
        </div>
    );
};

export default Headerline;