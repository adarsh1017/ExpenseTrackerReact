import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ amount: '', description: '', category: '' });

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const expensesRef = firebase.database().ref('expenses');
        expensesRef.on('value', (snapshot) => {
          const expensesData = snapshot.val();
          if (expensesData) {
            const expensesArray = Object.values(expensesData);
            setExpenses(expensesArray);
          }
        });
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();

    return () => {
      firebase.database().ref('expenses').off();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const addExpense = async (e) => {
    e.preventDefault();
    try {
      const expenseRef = firebase.database().ref('expenses');
      await expenseRef.push(newExpense);
      console.log('Expense added successfully');
      setNewExpense({ amount: '', description: '', category: '' });
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <form onSubmit={addExpense}>
        <input type="text" name="amount" value={newExpense.amount} onChange={handleInputChange} placeholder="Amount" />
        <input type="text" name="description" value={newExpense.description} onChange={handleInputChange} placeholder="Description" />
        <input type="text" name="category" value={newExpense.category} onChange={handleInputChange} placeholder="Category" />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{`${expense.description}: $${expense.amount} (${expense.category})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
