import React from 'react';
import PropTypes from 'prop-types';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from "./image-gallery.module.css"

const ImageGallery = ({ images,showImage}) => (
  <section>
    <ul className={styles.ImageGallery}>
      {images.map(({ id, tags, webformatURL, largeImageURL}) => (
        <li  key={id}  >
          <img className={styles.ImageGalleryItemImage}
            alt={tags}
            src={webformatURL}
         onClick={()=>showImage({largeImageURL})}
          />
        </li>
      ))}
    </ul>
  </section>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
       webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL:PropTypes.string.isRequired,
    })
  ).isRequired,
showImage: PropTypes.func.isRequired,
};

export default ImageGallery;