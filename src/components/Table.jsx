import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import TableRow from './TableRow';
import TableHead from './TableHead';

function Table() {
  const { fetchAPI, loading, planetList } = useContext(MyContext);
  useEffect(fetchAPI, []);
  return !loading && (
    <div className="table">
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {planetList.map((planet) => (
            <TableRow key={ planet.name } planet={ planet } />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
