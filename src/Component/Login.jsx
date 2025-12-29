import React from "react";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex overflow-hidden relative">

                {/* Close button */}
                <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
                    ✕
                </button>

                {/* Left image */}
                <div className="w-1/2 hidden md:flex items-center justify-center bg-slate-50">
                    <img
                        src="https://i.ibb.co/4P7qZpS/login.png"
                        alt="login illustration"
                        className="w-3/4"
                    />
                </div>

                {/* Right form */}
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                        লগইন করুন
                    </h2>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm mb-1">ইমেইল</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <label className="block text-sm mb-1">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-right text-sm mb-4">
                        <Link to="#" className="text-blue-600 hover:underline">
                            পাসওয়ার্ড ভুলে গেছেন?
                        </Link>
                    </div>

                    {/* Login button */}
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        লগইন
                    </button>

                    {/* Google login */}
                    <button className="w-full bg-red-600 text-white py-2 rounded mt-4 hover:bg-red-700 transition">
                        Google দিয়ে লগইন করুন
                    </button>

                    {/* Register */}
                    <p className="text-center text-sm mt-4">
                        নতুন ইউজার?
                        <Link to="/register" className="text-blue-600 ml-1 hover:underline">
                            রেজিস্টার করুন
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
