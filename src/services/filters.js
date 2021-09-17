const filterByName = (name, movies) => (
  movies.filter((movie) => movie.name.includes(name))
);

const runFilterByName = (filters, movies) => {
  const { name } = filters.filterByName;
  let actualReturn = movies;
  if (name) {
    actualReturn = filterByName(name, movies);
  }

  return (actualReturn);
};

const filterByValue = (data, movies) => {
  const { column, comparsion, value } = data;
  let actualOperator = '';
  switch (comparsion) {
  case 'maior que':
    actualOperator = 'greater';
    break;
  case 'menor que':
    actualOperator = 'lower';
    break;
  case 'igual a':
    actualOperator = 'equal';
    break;
  default:
    console.log('default');
  }
  const operators = {
    greater: (a, b) => a < b,
    lower: (a, b) => a > b,
    equal: (a, b) => a === b,
  };
  return movies.filter((movie) => (
    operators[actualOperator](Number(value), Number(movie[column]))
  ));
};

const runFilters = (filters, movies) => {
  const nameFilterReturn = runFilterByName(filters, movies);
  let actualReturn = nameFilterReturn;
  filters.filterByNumericValues.forEach((element) => {
    actualReturn = filterByValue(element, actualReturn);
  });
  return (actualReturn);
};

export { runFilterByName, runFilters };
