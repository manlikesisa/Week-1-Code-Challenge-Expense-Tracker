import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {


  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Bmw', amount: 1000, description: 'Newly Imported cars', category: 'Cars', date: '2025-07-08' },
    { id: 2, name: 'Banana', amount: 40, description: 'To be exported', category: 'Fruits', date: '2025-09-02' },
    { id: 3, name: 'Samsung', amount: 155, description: 'Newly imported phones', category: 'cellular devices', date: '2025-04-03' },
    { id: 4, name: 'Chopsticks', amount: 430, description: 'For Dinner at a local restaurant', category: 'Food', date: '2023-04-05' },
    { id: 5, name: 'Kiwi', amount: 345, description: 'For Donation', category: 'School', date: '2025-12-06' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



    return (
        <div className="container">
          <h1>Expense Tracker</h1>
          <p>Start taking control of your finances and life. Record, categorise, and analyse your spending.</p>
      
          <div className="app-grid">
            <div className="form-section">
              <h2>Add Expense</h2>
              <ExpenseForm onAddExpense={addExpense} />
            </div>
      
            <div className="table-section">
              <SearchBar onSearch={setSearchTerm} />
              <h2>Expense List</h2>
              <ExpenseTable items={filteredExpenses} />
            </div>
          </div>
        </div>
      );
      
  
};

export default App;
