import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    /* ===============================
       Google Register / Login
    ================================ */
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        setError("");

        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Google User:", result.user);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    /* ===============================
       Email Password Register
    ================================ */
    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password.length < 6) {
            setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await updateProfile(result.user, {
                displayName: name,
                photoURL: photo,
            });

            console.log("Registered User:", result.user);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex overflow-hidden relative">

                {/* Close button */}
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                >
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

                    {error && (
                        <p className="text-red-500 text-sm text-center mb-4">
                            {error}
                        </p>
                    )}

                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-sm mb-1">নাম</label>
                            <input
                                type="text"
                                required
                                placeholder="আপনার নাম"
                                className="w-full border rounded px-3 py-2"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1">ইমেইল</label>
                            <input
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="w-full border rounded px-3 py-2"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1">ফটো URL</label>
                            <input
                                type="text"
                                placeholder="https://your-photo-link.com"
                                className="w-full border rounded px-3 py-2"
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1">
                                পাসওয়ার্ড
                            </label>
                            <input
                                type="password"
                                required
                                placeholder="********"
                                className="w-full border rounded px-3 py-2"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Normal Register */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            রেজিস্টার
                        </button>
                    </form>

                    {/* Google Register */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full bg-red-600 text-white py-2 rounded mt-4 hover:bg-red-700"
                    >
                        Google দিয়ে রেজিস্টার করুন
                    </button>

                    <p className="text-center text-sm mt-4">
                        একাউন্ট আছে?
                        <Link
                            to="/login"
                            className="text-blue-600 ml-1 hover:underline"
                        >
                            লগইন করুন
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;