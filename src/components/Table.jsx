import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import TableRow from './TableRow';
import TableHead from './TableHead';

function Table() {
  const { fetchAPI, loading, data } = useContext(MyContext);
  useEffect(fetchAPI, []);
  return !loading && (
    <div className="table">
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {data.map((planet) => (
            <TableRow key={ planet.name } planet={ planet } />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
