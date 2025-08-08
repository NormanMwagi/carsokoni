import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/slices/userSlice';

const Navbar = () =>
{
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);

    return (
        <div className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-gray-900">Carsoko</h1>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>

                {/* Auth Buttons (desktop) */}
                {isAuthenticated ? (
                    <div className="hidden md:flex gap-2">
                        <button
                            className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
                            onClick={() => dispatch(logoutUser())}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="hidden md:flex gap-2">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-sm rounded-md border border-gray-700 text-gray-700 hover:bg-gray-100"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-4 py-2 text-sm rounded-md bg-black text-white hover:opacity-90"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setOpen(o => !o)}
                >
                    {open
                        ? <X className="w-6 h-6 text-gray-700" />
                        : <Menu className="w-6 h-6 text-gray-700" />
                    }
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white px-6 pb-4 space-y-4">
                    <ul className="flex flex-col gap-4 text-gray-700">
                        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
                        <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
                        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                        <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
                    </ul>

                    {isAuthenticated ? (
                        <div className="flex flex-col gap-2">
                            <button
                                className="block text-center px-4 py-2 text-sm rounded-md border border-gray-700 text-gray-700 hover:bg-gray-100"
                                onClick={() => dispatch(logoutUser())}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <Link
                                to="/login"
                                className="block text-center px-4 py-2 text-sm rounded-md border border-gray-700 text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="block text-center px-4 py-2 text-sm rounded-md bg-black text-white hover:opacity-90"
                                onClick={() => setOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}

export default Navbar;
