import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Filter({ addFilter }) {
  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const { filters: { filterByNumericValues } } = useContext(MyContext);
  const actualColumns = filterByNumericValues.map((column) => (column.column));
  const openColumns = columns.filter((column) => !actualColumns.includes(column));
  const [actualColumn, changeActualColumn] = useState(openColumns[0]);
  const [actualComparsion, changeActualComparsion] = useState('maior que');
  const [actualValue, changeActualValue] = useState(0);

  const sendFilter = (number) => {
    if ((actualValue > 0) || (number > 0)) {
      if (number > 0) {
        addFilter({ actualColumn, actualComparsion }, number);
      } else {
        addFilter({ actualColumn, actualComparsion }, actualValue);
      }
    }
  };

  return (
    <div>
      <select
        onChange={ ({ target }) => {
          changeActualColumn(target.value);
          sendFilter();
        } }
        data-testid="column-filter"
        name="column"
      >
        {/* {filterByNumericValues[indice]
          ? <option value={ filterByNumericValues[indice].column }>{filterByNumericValues[indice].column}</option>
          : openColumns.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          ))} */}
        {openColumns.map((column) => (
          <option key={ column } value={ column }>{column}</option>
        ))}
      </select>
      <select
        onChange={ ({ target }) => {
          changeActualComparsion(target.value);
          sendFilter();
        } }
        data-testid="comparison-filter"
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ ({ target }) => {
          changeActualValue(target.value);
          sendFilter(target.value);
        } }
        data-testid="value-filter"
        type="number"
        name="value"
      />
    </div>
  );
}

Filter.propTypes = {
  addFilter: PropTypes.func.isRequired,
};

export default Filter;

// import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
// import MyContext from '../context/MyContext';

// function Filter({ addFilter, indice }) {
//   const columns = ['population', 'orbital_period',
//     'diameter', 'rotation_period', 'surface_water'];
//   const { filters: { filterByNumericValues } } = useContext(MyContext);
//   const actualColumns = filterByNumericValues.map((column) => (column.column));
//   const openColumns = columns.filter((column) => !actualColumns.includes(column));
//   const [actualColumn, changeActualColumn] = useState(openColumns[0]);
//   const [actualComparsion, changeActualComparsion] = useState('maior que');
//   const [actualValue, changeActualValue] = useState(0);

//   const sendFilter = (number) => {
//     if ((actualValue > 0) || (number > 0)) {
//       if (number > 0) {
//         addFilter({ actualColumn, actualComparsion }, number);
//       } else {
//         addFilter({ actualColumn, actualComparsion }, actualValue);
//       }
//     }
//   };

//   return (
//     <div>
//       <select
//         onChange={ ({ target }) => {
//           changeActualColumn(target.value);
//           sendFilter();
//         } }
//         data-testid="column-filter"
//         name="column"
//       >
//         {filterByNumericValues[indice]
//           ? <option value={ filterByNumericValues[indice].column }>{filterByNumericValues[indice].column}</option>
//           : openColumns.map((column) => (
//             <option key={ column } value={ column }>{column}</option>
//           ))}
//       </select>
//       <select
//         onChange={ ({ target }) => {
//           changeActualComparsion(target.value);
//           sendFilter();
//         } }
//         data-testid="comparison-filter"
//         name="comparison"
//       >
//         <option value="maior que">maior que</option>
//         <option value="menor que">menor que</option>
//         <option value="igual a">igual a</option>
//       </select>
//       <input
//         onChange={ ({ target }) => {
//           changeActualValue(target.value);
//           sendFilter(target.value);
//         } }
//         data-testid="value-filter"
//         type="number"
//         name="value"
//       />
//     </div>
//   );
// }

// Filter.propTypes = {
//   addFilter: PropTypes.func.isRequired,
//   indice: PropTypes.number.isRequired,
// };

// export default Filter;
