import React from 'react';

const ImageGalleryItem = ({ pictures, onOpenModal }) => {
  return pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li key={id} className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          onClick={onOpenModal}
          data-img={largeImageURL}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
