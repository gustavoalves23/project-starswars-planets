import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ planet }) {
  const filteredPlanet = Object.keys(planet).reduce((acc, act) => {
    if (act !== 'residents') {
      return { ...acc, [act]: planet[act] };
    }
    return { ...acc };
  }, {});

  return (
    <tr>
      {Object.keys(filteredPlanet).map((actualPlanet) => (
        <td key={ `${filteredPlanet.name} + ${actualPlanet}` }>
          { filteredPlanet[actualPlanet] }
        </td>
      ))}
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableRow;
