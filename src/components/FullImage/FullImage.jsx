import styles from "./fullImage.module.css"
const FullImage = ({ largeImageURL }) => {
    return (
        <div>
            <img className={styles.ImageGalleryItemImage} src={largeImageURL} alt="Not found" />
     </div>
 )   
}
export default FullImage;
