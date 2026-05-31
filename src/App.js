import { useState, useEffect } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Dashboard from "./components/Dashboard";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("https://expense-tracker-zd7c.onrender.com/api/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => { fetchExpenses(); }, []);

  const addExpense = async (expense) => {
    await fetch("https://expense-tracker-zd7c.onrender.com/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense)
    });
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`https://expense-tracker-zd7c.onrender.com/api/expenses/${id}`, { method: "DELETE" });
    fetchExpenses();
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#1A56A4" }}>💰 Expense Tracker</h1>
      <Dashboard expenses={expenses} />
      <AddExpense onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;