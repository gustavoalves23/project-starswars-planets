const filterByName = (name, movies) => (
  movies.filter((movie) => movie.name.includes(name))
);

const runFilters = (filters, movies) => {
  const { name } = filters.filterByName;
  let actualReturn = movies;
  if (name) {
    actualReturn = filterByName(name, movies);
  }

  return (actualReturn);
};

export default runFilters;
