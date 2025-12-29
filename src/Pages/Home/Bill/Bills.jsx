import React, { useState } from "react";
import { Link } from "react-router";

const billsData = [
  {
    id: 1,
    type: "electricity",
    title: "Electricity Bill",
    company: "DESCO",
    dueDate: "20/05/2025",
    amount: 1200,
    logo: "/logos/desco.png",
  },
  {
    id: 2,
    type: "electricity",
    title: "Electricity Bill",
    company: "NESCO",
    dueDate: "18/05/2025",
    amount: 1450,
    logo: "/logos/nesco.png",
  },
  {
    id: 3,
    type: "gas",
    title: "Gas Bill",
    company: "TITAS",
    dueDate: "19/05/2025",
    amount: 980,
    logo: "/logos/titas.png",
  },
  {
    id: 4,
    type: "water",
    title: "Water Bill",
    company: "WASA",
    dueDate: "21/05/2025",
    amount: 890,
    logo: "/logos/wasa.png",
  },
];

const Bills = () => {
  const [filter, setFilter] = useState("all");

  const filteredBills =
    filter === "all"
      ? billsData
      : billsData.filter((bill) => bill.type === filter);

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-6 p-2 border rounded-lg"
      >
        <option value="all">All</option>
        <option value="electricity">Electricity</option>
        <option value="gas">Gas</option>
        <option value="water">Water</option>
      </select>

      <div className="space-y-4">
        {filteredBills.map((bill) => (
          <div
            key={bill.id}
            className="bg-white p-4 rounded-xl flex justify-between items-center shadow"
          >
            <div>
              <h4 className="text-lg font-medium">{bill.title}</h4>
              <small>{bill.company}</small>
            </div>

            
            <Link
              to={`/bills/${bill.id}`}
              state={{ bill }}
              className="bg-indigo-600 text-white px-4 py-1 rounded-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;