import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        setOpen(false);
        navigate("/login");
    };

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-green-600 font-semibold"
            : "text-gray-600 hover:text-green-600";

    return (
        <nav className="w-full border-b bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold text-green-600">
                    MyBill
                </NavLink>

                <div className="flex items-center gap-6 relative">
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/bills" className={linkClass}>Bills</NavLink>

                    {!user ? (
                        <>
                            <NavLink to="/login" className={linkClass}>
                                Login
                            </NavLink>
                            <NavLink to="/register" className={linkClass}>
                                Register
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/paybills" className={linkClass}>
                                My Pay Bills
                            </NavLink>

                            {/* Profile Avatar */}
                            <div className="relative">
                                <img
                                    onClick={() => setOpen(!open)}
                                    src={user.photoURL || "https://i.pravatar.cc/40"}
                                    alt="avatar"
                                    className="w-9 h-9 rounded-full border cursor-pointer"
                                />

                                {/* Dropdown */}
                                {open && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg p-4 z-50">
                                        <p className="font-semibold">
                                            {user.displayName || "No Name"}
                                        </p>
                                        <p className="text-sm text-gray-600 break-all">
                                            {user.email}
                                        </p>

                                        <button
                                            onClick={handleLogout}
                                            className="mt-4 w-full bg-red-500 text-white py-1.5 rounded hover:bg-red-600"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;