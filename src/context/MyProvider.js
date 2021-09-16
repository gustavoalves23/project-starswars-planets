import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import swAPI from '../services/swAPI';
import runFilters from '../services/filters';

function MyProvider({ children }) {
  const [originalList, changeOriginalList] = useState({});
  const [planetList, changePlanetList] = useState({});
  const [loading, changeLoading] = useState(true);
  const [filters, changeFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    changePlanetList(runFilters(filters, originalList));
  }, [filters, originalList]);

  function fetchAPI() {
    swAPI()
      .then((newPlanetList) => {
        changeOriginalList(newPlanetList);
        changePlanetList(newPlanetList);
        changeLoading(false);
      });
  }

  function changeNameFilter(name) {
    changeFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
  }

  return (
    <MyContext.Provider
      value={ {
        planetList,
        loading,
        fetchAPI,
        changeNameFilter,
      } }
    >
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MyProvider;
