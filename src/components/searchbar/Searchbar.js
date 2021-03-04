// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// export default class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     query: '',
//     pictures: [],
//     page: 1,
//   };

//   onHandleChange = ({ target }) => {
//     const { value: query } = target;
//     this.setState({ query });
//   };

//   onHandleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.query);
//     this.setState({
//       pictures: [],
//       page: 1,
//     });
//     this.props.clearSubmit();
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.onHandleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.onHandleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

import React from 'react';

const Searchbar = ({ onHandleSubmit, onHandleChange, query }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onHandleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onHandleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
