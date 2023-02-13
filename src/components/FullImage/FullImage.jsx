import styles from "./fullImage.module.css"
import PropTypes from 'prop-types';
const FullImage = ({ largeImageURL }) => {
    return (
        <div>
            <img className={styles.ImageGalleryItemImage} src={largeImageURL} alt="Not found" />
     </div>
 )   
}
export default FullImage;
FullImage.propTypes = {
      largeImageURL:PropTypes.string.isRequired,
};