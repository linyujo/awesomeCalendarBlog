import React from 'react';

import { parseImgur } from '../../api/images';

import './index.scss';

const Image = ({ href, title, text }) => (
  <img
    className="lozad mb-3 align-self-center resized"
    data-src={parseImgur(href, 'large')}
    title={title || text}
    alt={title || text}
    srcSet=""
  />
  // <img
  // width="1140"
  // height="855"
  // src="https://erindiary.tw/wp-content/uploads/2019/02/名古屋7-1140x855.jpg"
  // class="attachment-ashe-full-thumbnail size-ashe-full-thumbnail wp-post-image"
  // alt=""
  // srcset="https://erindiary.tw/wp-content/uploads/2019/02/名古屋7-1140x855.jpg 1140w, https://erindiary.tw/wp-content/uploads/2019/02/名古屋7-150x113.jpg 150w, https://erindiary.tw/wp-content/uploads/2019/02/名古屋7-300x225.jpg 300w, https://erindiary.tw/wp-content/uploads/2019/02/名古屋7-768x576.jpg 768w, https://erindiary.tw/wp-content/uploads/2019/02/名古屋7-1024x768.jpg 1024w" sizes="(max-width: 1140px) 100vw, 1140px">
  // </img>
);


export default Image;
