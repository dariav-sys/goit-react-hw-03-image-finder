import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures, onOpenModal }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem pictures={pictures} onOpenModal={onOpenModal} />
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
