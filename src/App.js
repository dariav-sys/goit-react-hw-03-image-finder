import React, { Component } from 'react';

import Searchbar from './components/searchbar/Searchbar';
import Loader from 'react-loader-spinner';
import ImageGallery from './components/imageGallery/ImageGallery';
import Button from './components/button/Button';
import Modal from './components/modal/Modal';

import { fetchImages } from './services/picturesApi';

import './index.css';

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    searchQuery: '',
    loading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onOpenModal = event => {
    // console.log('object');
    this.setState({
      largeImageURL: event.target.dataset.img,
      tags: event.target.alt,
    });
    this.onToggleModal();
  };

  fetchPictures = () => {
    const { page, searchQuery } = this.state;
    this.setState({ loading: true });

    fetchImages({ searchQuery, page })
      .then(response => {
        // console.log(response);
        this.setState(prevState => {
          return {
            pictures: [...prevState.pictures, ...response.data.hits],
            page: prevState.page + 1,
          };
        });
      })
      .finally(() => this.setState({ loading: false }));
  };

  clearSubmit = () => {
    this.setState({
      pictures: [],
      page: 1,
    });
  };

  onHandleChange = ({ target }) => {
    const { value: query } = target;
    this.setState({ query });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.onChangeQuery(this.state.query);
    this.setState({
      pictures: [],
      page: 1,
    });
    this.clearSubmit();
  };

  render() {
    const { pictures, loading, showModal, largeImageURL, tags } = this.state;

    return (
      <div className="App">
        <Searchbar
          onHandleSubmit={this.onHandleSubmit}
          onHandleChange={this.onHandleChange}
        />
        <div className="Loader">{loading && <Loader />}</div>
        <ImageGallery pictures={pictures} onOpenModal={this.onOpenModal} />
        {pictures.length > 0 && <Button onClick={this.fetchPictures} />}
        {showModal && (
          <Modal onClick={this.onOpenModal} onClose={this.onToggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
