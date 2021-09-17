import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function CleanFilters() {
  const { filters: { filterByNumericValues },
    changeFiltersState } = useContext(MyContext);

  const cleanFilter = (column) => {
    changeFiltersState((prevState) => {
      console.log(prevState);
      console.log(column);
      const actualState = prevState.filterByNumericValues;
      const filteredState = actualState.filter((state) => (
        state.column !== column
      ));
      console.log(filteredState);
      const newState = {
        ...prevState,
        filterByNumericValues: [
          ...filteredState,
        ],
      };
      return (newState);
    });
  };

  return (
    <div>
      <ul>
        {filterByNumericValues.map((filter) => (
          <li
            key={ filter.column }
            data-testid="filter"
          >
            {`${filter.column}`}
            <button
              type="button"
              onClick={ () => { cleanFilter(filter.column); } }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CleanFilters;
