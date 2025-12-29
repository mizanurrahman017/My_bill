import React from "react";
import { Link } from "react-router";

const Register = () => {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex overflow-hidden relative">

                {/* Close button */}
                <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
                    ✕
                </button>

                {/* Left illustration */}
                <div className="w-1/2 hidden md:flex items-center justify-center bg-slate-50">
                    <img
                        src="https://i.ibb.co/1fZ3J9m/register.png"
                        alt="register illustration"
                        className="w-3/4"
                    />
                </div>

                {/* Right form */}
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                        রেজিস্টার করুন
                    </h2>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">নাম</label>
                        <input
                            type="text"
                            placeholder="আপনার নাম"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">ইমেইল</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">ফটো URL</label>
                        <input
                            type="text"
                            placeholder="https://your-photo-link.com"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Register button */}
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        রেজিস্টার
                    </button>

                    {/* Google register */}
                    <button className="w-full bg-red-600 text-white py-2 rounded mt-4 hover:bg-red-700 transition">
                        Google দিয়ে রেজিস্টার করুন
                    </button>

                    {/* Login link */}
                    <p className="text-center text-sm mt-4">
                        একাউন্ট আছে?
                        <Link to="/login" className="text-blue-600 ml-1 hover:underline">
                            লগইন করুন
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
