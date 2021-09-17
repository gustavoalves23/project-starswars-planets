import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import Filter from './Filter';

function Header() {
  const [actualName, changeActualName] = useState('');
  const { changeFiltersState, runFiltersCall } = useContext(MyContext);
  useEffect(() => {
    changeFiltersState((prevState) => ({
      ...prevState,
      filterByName: { name: actualName },
    }));
  }, [actualName, changeFiltersState]);

  const addFilter = ({ actualColumn, actualComparsion }, actualValue) => {
    const maxStores = 5;
    changeFiltersState((prevState) => {
      if (prevState.filterByNumericValues.length <= maxStores) {
        if (prevState.filterByNumericValues.some((value) => (
          value.column === actualColumn
        ))) {
          const matchingItem = (
            prevState.filterByNumericValues.find((value) => value.column === actualColumn)
          );
          const actualFilterState = [...prevState.filterByNumericValues];
          const filteredFilterState = (
            actualFilterState.filter((item) => item !== matchingItem)
          );
          return ({
            ...prevState,
            filterByNumericValues: [
              ...filteredFilterState,
              {
                column: actualColumn,
                comparsion: actualComparsion,
                value: actualValue,
              },
            ],
          });
        }
        return (
          {
            ...prevState,
            filterByNumericValues: [
              ...prevState.filterByNumericValues,
              {
                column: actualColumn,
                comparsion: actualComparsion,
                value: actualValue,
              },
            ],
          }
        );
      }
      return ({ ...prevState });
    });
  };

  return (
    <div className="header">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target }) => changeActualName(target.value) }
      />
      <Filter key="0" addFilter={ addFilter } />
      {/* {filterByNumericValues.reduce((acc, _act, index) => {
        if (index < maxFilters) {
          return [...acc,
            <Filter indice={ index + 1 } key={ index + 1 } addFilter={ addFilter } />];
        }
        return [...acc];
      }, [<Filter key="0" addFilter={ addFilter } />])} */}
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

// import React, { useState, useContext, useEffect } from 'react';
// import MyContext from '../context/MyContext';
// import Filter from './Filter';

// function Header() {
//   const [actualName, changeActualName] = useState('');
//   const { filters: { filterByNumericValues },
//     changeFiltersState, runFiltersCall } = useContext(MyContext);
//   useEffect(() => {
//     changeFiltersState((prevState) => ({
//       ...prevState,
//       filterByName: { name: actualName },
//     }));
//   }, [actualName, changeFiltersState]);

//   const addFilter = ({ actualColumn, actualComparsion }, actualValue) => {
//     const maxStores = 5;
//     changeFiltersState((prevState) => {
//       if (prevState.filterByNumericValues.length < maxStores) {
//         if (prevState.filterByNumericValues.some((value) => (
//           value.column === actualColumn
//         ))) {
//           const matchingItem = (
//             prevState.filterByNumericValues.find((value) => value.column === actualColumn)
//           );
//           const actualFilterState = [...prevState.filterByNumericValues];
//           const filteredFilterState = (
//             actualFilterState.filter((item) => item !== matchingItem)
//           );
//           return ({
//             ...prevState,
//             filterByNumericValues: [
//               ...filteredFilterState,
//               {
//                 column: actualColumn,
//                 comparsion: actualComparsion,
//                 value: actualValue,
//               },
//             ],
//           });
//         }
//         return (
//           {
//             ...prevState,
//             filterByNumericValues: [
//               ...prevState.filterByNumericValues,
//               {
//                 column: actualColumn,
//                 comparsion: actualComparsion,
//                 value: actualValue,
//               },
//             ],
//           }
//         );
//       }
//       return ({ ...prevState });
//     });
//   };

//   const maxFilters = 4;

//   return (
//     <div className="header">
//       <input
//         type="text"
//         data-testid="name-filter"
//         onChange={ ({ target }) => changeActualName(target.value) }
//       />
//       {filterByNumericValues.reduce((acc, _act, index) => {
//         if (index < maxFilters) {
//           return [...acc, <Filter indice={ index + 1 } key={ index + 1 } addFilter={ addFilter } />];
//         }
//         return [...acc];
//       }, [<Filter key="0" indice="0" addFilter={ addFilter } />])}
//       <button
//         onClick={ runFiltersCall }
//         type="button"
//         data-testid="button-filter"
//       >
//         Filtrar
//       </button>
//     </div>
//   );
// }

// export default Header;
