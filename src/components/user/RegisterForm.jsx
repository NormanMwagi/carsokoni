import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () =>
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const handleChange = (e) =>
    {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () =>
    {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (!validate()) return;

        const { confirmPassword, ...userData } = formData;
        dispatch(registerUser(userData))
            .unwrap()
            .then(() =>
            {
                navigate('/login');
            })
            .catch((error) =>
            {
                console.error('Registration failed:', error);
            });
    };
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

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4 rounded-md">
                    <div>
                        <label htmlFor="full-name" className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            id="full-name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className={`relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="John Doe"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="register-email-address" className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="register-email-address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className={`relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="register-password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="register-password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`relative block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                            placeholder="••••••••"
                        />
                        {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
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
                        {status === 'loading' ? 'Creating Account...' : 'Sign Up'}
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