import React from 'react';

const Banner = () => {
    return (
        <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-12 rounded-xl text-center shadow">
            <h1 className="text-4xl font-bold mb-4">
                Manage Your Utility Bills Easily
            </h1>
            <p className="text-lg opacity-90">
                Track electricity, gas, water & internet bills in one place
            </p>
        </section>
    );
};

export default Banner;