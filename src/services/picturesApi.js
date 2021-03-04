import axios from 'axios';

export const fetchImages = ({ searchQuery = '', page = 1 }) => {
  const key = '20192058-8d48266eaed8d6a6c61b42150';
  const BASE_URL = 'https://pixabay.com/api';
  return axios.get(
    `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};
