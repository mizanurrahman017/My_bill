import React from "react";
import { useLocation, Link } from "react-router";

const Details = () => {
  const location = useLocation();
  const bill = location.state?.bill;

  if (!bill) {
    return <p className="text-center mt-20">No bill data found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <div className="flex items-center gap-4 mb-6">
          <img src={bill.logo} alt={bill.company} className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">{bill.title}</h2>
            <p className="text-gray-500">{bill.company}</p>
          </div>
        </div>

        <p><strong>Type:</strong> {bill.type}</p>
        <p><strong>Due Date:</strong> {bill.dueDate}</p>
        <p className="text-xl font-bold text-indigo-600">
          Amount: ৳ {bill.amount}
        </p>

        <Link
          to="/bills"
          className="block mt-6 text-center bg-indigo-600 text-white py-2 rounded-lg"
        >
          Back to Bills
        </Link>
      </div>
    </div>
  );
};

export default Details;