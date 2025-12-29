import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-green-600 font-semibold"
            : "text-gray-600 hover:text-green-600";

    return (
        <nav className="w-full border-b bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

               
                <NavLink to="/" className="text-2xl font-bold text-green-600">
                    MyBill
                </NavLink>

                <div className="flex items-center gap-6">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/bills" className={linkClass}>Bills</NavLink>

                    {!isLoggedIn ? (
                        <>
                            <NavLink to="/login" className={linkClass}>Login</NavLink>
                            <NavLink to="/register" className={linkClass}>Register</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/mypaybills" className={linkClass}>My Pay Bills</NavLink>
                            <NavLink to="/profile" className={linkClass}>Profile</NavLink>

                            <img
                                src="https://i.pravatar.cc/32"
                                alt="avatar"
                                className="w-8 h-8 rounded-full border"
                            />

                            <button
                                onClick={() => setIsLoggedIn(false)}
                                className="bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
