import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const [actualName, changeActualName] = useState('');
  const { filters, changeFilters, runFiltersCall } = useContext(MyContext);
  const [actualColumn, changeActualColumn] = useState('population');
  const [actualComparsion, changeActualComparsion] = useState('maior que');
  const [actualValue, changeActualValue] = useState(0);
  useEffect(() => {
    changeFilters((prevState) => ({
      ...prevState.filters,
      filterByName: { name: actualName },
    }));
  }, [actualName]);

  useEffect(() => {
    changeFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: actualColumn,
          comparsion: actualComparsion,
          value: actualValue,
        },
      ],
    });
  }, [actualColumn, actualComparsion, actualValue]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case ('column'):
      changeActualColumn(value);
      break;
    case ('comparison'):
      changeActualComparsion(value);
      break;
    case ('value'):
      changeActualValue(value);
      break;
    default:
      console.log('default');
    }
  };

  return (
    <div className="header">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target }) => changeActualName(target.value) }
      />
      <select onChange={ handleChange } data-testid="column-filter" name="column">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select onChange={ handleChange } data-testid="comparison-filter" name="comparison">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleChange }
        data-testid="value-filter"
        type="number"
        name="value"
      />
      <button
        onClick={ runFiltersCall }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Header;
