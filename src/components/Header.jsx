import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const [actualName, changeActualName] = useState('');
  const { changeFiltersState, runFiltersCall } = useContext(MyContext);
  const [actualColumn, changeActualColumn] = useState('population');
  const [actualComparsion, changeActualComparsion] = useState('maior que');
  const [actualValue, changeActualValue] = useState(0);
  useEffect(() => {
    changeFiltersState((prevState) => ({
      ...prevState,
      filterByName: { name: actualName },
    }));
  }, [actualName, changeFiltersState]);

  useEffect(() => {
    changeFiltersState((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        {
          column: actualColumn,
          comparsion: actualComparsion,
          value: actualValue,
        },
      ],
    }));
  }, [actualColumn, actualComparsion, actualValue, changeFiltersState]);

  return (
    <div className="header">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target }) => changeActualName(target.value) }
      />
      <select
        onChange={ ({ target }) => { changeActualColumn(target.value); } }
        data-testid="column-filter"
        name="column"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        onChange={ ({ target }) => { changeActualComparsion(target.value); } }
        data-testid="comparison-filter"
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ ({ target }) => { changeActualValue(target.value); } }
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
