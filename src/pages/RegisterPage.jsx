import React from 'react'
import RegisterForm from '../components/user/RegisterForm';

const RegisterPage = () =>
{
    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 font-sans bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">
            <RegisterForm />
        </div>
    );
}

export default RegisterPage
