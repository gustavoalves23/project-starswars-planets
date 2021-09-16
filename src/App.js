import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Header />
      <Table />
    </MyProvider>
  );
}

export default App;
