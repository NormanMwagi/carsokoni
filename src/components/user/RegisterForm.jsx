import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () =>
{
    return (
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    Create Account
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                    Join Carsoko!
                </p>
            </div>

            <form className="mt-8 space-y-6" action="#" method="POST">
                <div className="space-y-4 rounded-md">
                    <div>
                        <label htmlFor="full-name" className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            id="full-name"
                            name="name"
                            type="text"
                            required
                            className="relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="register-email-address" className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="register-email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="register-password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="register-password"
                            name="password"
                            type="password"
                            required
                            className="relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            required
                            className="relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-lg group hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        Sign Up
                    </button>
                </div>
                <div className="text-sm text-center">
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Already have an account? Log in
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;