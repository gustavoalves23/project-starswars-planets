import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import swAPI from '../services/swAPI';
import { runFilterByName, runFilters } from '../services/filters';

function MyProvider({ children }) {
  const [originalList, changeOriginalList] = useState({});
  const [data, changePlanetList] = useState({});
  const [loading, changeLoading] = useState(true);
  const [filters, changeFiltersState] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });
  useEffect(() => {
    changePlanetList(runFilterByName(filters, originalList));
  }, [filters, originalList]);

  function fetchAPI() {
    swAPI()
      .then((newPlanetList) => {
        changeOriginalList(newPlanetList);
        changePlanetList(newPlanetList);
        changeLoading(false);
      });
  }

  function changeFilters(newFilters) {
    changeFiltersState(newFilters);
  }

  function runFiltersCall() {
    changePlanetList(runFilters(filters, originalList));
  }

  return (
    <MyContext.Provider
      value={ {
        data,
        loading,
        fetchAPI,
        filters,
        changeFilters,
        runFiltersCall,
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
