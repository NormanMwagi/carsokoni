import React, { useState } from 'react';

// Icon for the checkbox
const CheckIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const LoginForm = () =>
{
    return (
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lgs">
            <div className="text-center">
                <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-700 bg-yellow-300 rounded-full">
                    Carsoko Login
                </span>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                    Welcome To Carsoko!
                </h1>
            </div>

            <form className="mt-8 space-y-6" action="#" method="POST">
                <div className="space-y-4 rounded-md">
                    <div>
                        <label htmlFor="email-address" className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="batuhankra312@gmail.co"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <div>
                    {/* In a real app, this button's onClick would be handled differently,
               but here it switches to the register form as per the button's text. */}
                    <button
                        type="button"
                        className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-lg group hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                        Create an Account
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
