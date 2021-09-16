import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const [actualName, changeActualName] = useState('');
  const changeNameFilter = useContext(MyContext);
  useEffect(() => { changeNameFilter(actualName); }, [actualName, changeNameFilter]);
  return (
    <div className="header">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ ({ target }) => changeActualName(target.value) }
      />
    </div>
  );
}

export default Header;
