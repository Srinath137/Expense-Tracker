import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE","#00C49F","#FFBB28","#FF8042","#A28CFF"];

export default function Dashboard({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  
  const categoryData = Object.entries(
    expenses.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  return (
    <div style={{ background: "#f0f4ff", padding: 20, borderRadius: 8, marginBottom: 20 }}>
      <h2 style={{ color: "#1A56A4" }}>Total Spent: ₹{total.toFixed(2)}</h2>
      {categoryData.length > 0 && (
        <PieChart width={400} height={250}>
          <Pie data={categoryData} cx={200} cy={120} outerRadius={100} dataKey="value">
            {categoryData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}