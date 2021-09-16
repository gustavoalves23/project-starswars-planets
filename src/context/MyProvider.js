import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import swAPI from '../services/swAPI';

class MyProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      planetList: {},
      loading: true,
      filters: {
        filterByName: {
          name: '',
        },
      },
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.changeNameFilter = this.changeNameFilter.bind(this);
  }

  fetchAPI() {
    swAPI()
      .then((planetList) => {
        this.setState({
          planetList,
          loading: false,
        });
      });
  }

  changeNameFilter(name) {
    this.setState((previousState) => ({
      filters: {
        ...previousState.filters,
        filterByName: {
          name,
        },
      },
    }));
  }

  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider
        value={ {
          ...this.state,
          fetchAPI: this.fetchAPI,
          changeNameFilter: this.changeNameFilter,
        } }
      >
        { children }
      </MyContext.Provider>
    );
  }
}

MyProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MyProvider;
