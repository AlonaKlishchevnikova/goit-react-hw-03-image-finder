import { Component } from "react"
import fetchPage from "searchApi";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import FullImage from "./FullImage/FullImage";
import Loader from "./Loader/Loader";
// import FullImage from "./FullImage/FullImage";
class App extends Component {
  state = {
    search: "",
    images: [],
    error: null,
    page: 1,
    loader: false,
    loadMore: false,
    showModal: false,
    fullImage: null,
    
    
  }
  searchImage = search => {
    if (search !== this.state.search) {
      this.setState({
        search,
        images: [],
        page: 1,
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loader: true });
      fetchPage(search, page)
        .then(data => {
          if (data.hits.length < 1) {
            this.setState({
              loader: false,
              loadMore: false,
            });
            return alert('No images found for your request');
          }

          data.hits.forEach(({ id, webformatURL, largeImageURL }) => {
            this.setState(({ images }) => ({
              images: [...images, { id, webformatURL, largeImageURL }],
              loader: false,
              loadMore: page < Math.ceil(data.total / 12) ? true : false,
            }));
          });
        })
        .catch(error => console.log(error));
    } 
  }
 
     closeModal = ()=> {
        this.setState({
            showModal: false,
            fullImage: null,
        })
    }
  showLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  showImage = largeImageURL => {
    this.setState({
      showModal: true,
      fullImage: largeImageURL,
    })
  }
  render() {

    const { images, loader, showModal, fullImage, loadMore,} = this.state;
    const {  showImage,  closeModal,showLoadMore, searchImage } = this;
    return (
      <div>
        <Searchbar onSubmit={searchImage} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
           showImage={showImage}
          />
        )}
        {loader && <Loader/>}
        {loadMore && <Button onClick={showLoadMore} />}
        {showModal && <Modal close={closeModal}>
          <FullImage {...fullImage } />
        </Modal>}
    </div>
    );
  };
}
export default App;