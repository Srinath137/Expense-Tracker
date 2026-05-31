import { useState } from "react";

const CATEGORIES = ["Food","Transport","Entertainment","Shopping","Bills","Other"];

export default function AddExpense({ onAdd }) {
  const [form, setForm] = useState({ title: "", amount: "", category: "Food", note: "" });

  const handleSubmit = () => {
    if (!form.title || !form.amount) return alert("Fill required fields");
    onAdd({ ...form, amount: parseFloat(form.amount) });
    setForm({ title: "", amount: "", category: "Food", note: "" });
  };

  return (
    <div style={{ background: "#fff", padding: 20, borderRadius: 8, marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h3 style={{ color: "#1A56A4" }}>Add Expense</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <input placeholder="Title*" value={form.title} onChange={e => setForm({...form, title: e.target.value})} style={{ padding: 8, width: 150, borderRadius: 4, border: "1px solid #ccc" }} />
        <input placeholder="Amount*" type="number" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} style={{ padding: 8, width: 100, borderRadius: 4, border: "1px solid #ccc" }} />
        <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}>
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <input placeholder="Note (optional)" value={form.note} onChange={e => setForm({...form, note: e.target.value})} style={{ padding: 8, width: 150, borderRadius: 4, border: "1px solid #ccc" }} />
        <button onClick={handleSubmit} style={{ padding: "8px 16px", background: "#1A56A4", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}>Add</button>
      </div>
    </div>
  );
}