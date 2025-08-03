
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/slices/userSlice';

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
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const handleChange = (e) =>
    {
        const { name, value, type, checked } = e.target;
        setCredentials({
            ...credentials,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validate = () =>
    {
        const newErrors = {};
        if (!credentials.email) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(credentials.email)) newErrors.email = 'Email is invalid';
        if (!credentials.password) newErrors.password = 'Password is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (!validate()) return;

        dispatch(loginUser({
            email: credentials.email,
            password: credentials.password
        }))
            .unwrap()
            .then(() =>
            {
                if (credentials.rememberMe)
                {
                    localStorage.setItem('rememberedEmail', credentials.email);
                }
                navigate('/');
            })
            .catch((error) =>
            {
                console.error('Login failed:', error);
            });
    };

    return (
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
            <div className="text-center">
                <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-700 bg-yellow-300 rounded-full">
                    Carsoko Login
                </span>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
                    Welcome To Carsoko!
                </h1>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4 rounded-md">
                    <div>
                        <label htmlFor="email-address" className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            value={credentials.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className={`relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={credentials.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            className={`relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="rememberMe"
                            type="checkbox"
                            checked={credentials.rememberMe}
                            onChange={handleChange}
                            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                {status === 'failed' && (
                    <div className="p-3 text-center text-red-500 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}

                <div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-lg group hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:bg-gray-400"
                    >
                        {status === 'loading' ? 'Logging in...' : 'Login'}
                    </button>
                </div>

                <div className="text-sm text-center">
                    <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Don't have an account? Register
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
