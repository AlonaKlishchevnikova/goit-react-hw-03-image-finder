
import axios from 'axios';
import PropTypes from 'prop-types';

async function fetchPage({ search }, page) {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=32007112-f85cc9861ab3035eecab785e9&q=${search}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchPage.prototypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default fetchPage;
