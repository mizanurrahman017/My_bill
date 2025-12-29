import React from 'react';

const Categories = () => {
    return (
         <section>
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Bill Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Electricity", "Gas", "Water", "Internet"].map((cat) => (
            <div
              key={cat}
              className="bg-white border rounded-xl p-6 text-center shadow hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-green-600">
                {cat}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Categories;