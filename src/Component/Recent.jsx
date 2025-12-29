
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Recent = () => {
    const [bills, setBills] = useState([]);

  useEffect(() => {
    const demoBills = [
      { id: 1, title: "Electricity Bill", category: "Electricity", location: "Dhaka", date: "2025-01-05" },
      { id: 2, title: "Gas Bill", category: "Gas", location: "Chittagong", date: "2025-01-06" },
      { id: 3, title: "Water Bill", category: "Water", location: "Khulna", date: "2025-01-07" },
      { id: 4, title: "Internet Bill", category: "Internet", location: "Rajshahi", date: "2025-01-08" },
      { id: 5, title: "Electricity Bill", category: "Electricity", location: "Sylhet", date: "2025-01-09" },
      { id: 6, title: "Gas Bill", category: "Gas", location: "Barishal", date: "2025-01-10" },
    ];

    setBills(demoBills.slice(0, 6));
  }, []);
    
    return (
        
         <section>
            
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Recent Bills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bills.map((bill) => (
            <div
              key={bill.id}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {bill.title}
              </h3>

              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">Category:</span> {bill.category}</p>
                <p><span className="font-medium">Location:</span> {bill.location}</p>
                <p><span className="font-medium">Date:</span> {bill.date}</p>
              </div>

              <Link
                to={`/bills/${bill.id}`}
                className="inline-block mt-4 text-green-600 font-semibold hover:underline"
              >
                See Details →
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Recent;