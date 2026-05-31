export default function ExpenseList({ expenses, onDelete }) {
  return (
    <div>
      <h3 style={{ color: "#1A56A4" }}>All Expenses</h3>
      {expenses.length === 0 && <p style={{ color: "#888" }}>No expenses yet. Add one above!</p>}
      {expenses.map(e => (
        <div key={e._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", background: "#fff", borderRadius: 6, marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
          <div>
            <strong>{e.title}</strong> — <span style={{ color: "#555" }}>{e.category}</span>
            {e.note && <span style={{ color: "#888", fontSize: 13 }}> ({e.note})</span>}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontWeight: "bold", color: "#1A56A4" }}>₹{e.amount}</span>
            <button onClick={() => onDelete(e._id)} style={{ background: "#e74c3c", color: "#fff", border: "none", borderRadius: 4, padding: "4px 10px", cursor: "pointer" }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}