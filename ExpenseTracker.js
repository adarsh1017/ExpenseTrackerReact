import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ amount: '', description: '', category: '' });
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const expensesRef = firebase.database().ref('expenses');
        expensesRef.on('value', (snapshot) => {
          const expensesData = snapshot.val();
          if (expensesData) {
            const expensesArray = Object.entries(expensesData).map(([id, expense]) => ({ id, ...expense }));
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

  const deleteExpense = async (id) => {
    try {
      const expenseRef = firebase.database().ref(`expenses/${id}`);
      await expenseRef.remove();
      console.log('Expense successfully deleted');
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const editExpense = (id) => {
    setEditingExpense(id);
  };

  const saveEditedExpense = async (id, updatedExpense) => {
    try {
      const expenseRef = firebase.database().ref(`expenses/${id}`);
      await expenseRef.update(updatedExpense);
      console.log('Expense successfully updated');
      setEditingExpense(null);
    } catch (error) {
      console.error('Error updating expense:', error);
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
        {expenses.map((expense) => (
          <li key={expense.id}>
            {editingExpense === expense.id ? (
              <form onSubmit={(e) => {
                e.preventDefault();
                saveEditedExpense(expense.id, { amount: e.target.amount.value, description: e.target.description.value, category: e.target.category.value });
              }}>
                <input type="text" name="amount" defaultValue={expense.amount} />
                <input type="text" name="description" defaultValue={expense.description} />
                <input type="text" name="category" defaultValue={expense.category} />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <div>{`${expense.description}: $${expense.amount} (${expense.category})`}</div>
                <button onClick={() => editExpense(expense.id)}>Edit</button>
                <button onClick={() => deleteExpense(expense.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
