import React, { useState } from 'react';
import LoginForm from '../components/user/LoginForm';
import RegisterForm from '../components/user/RegisterForm';

const LoginPage = () =>
{

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <LoginForm />

        </div>
    );
};

export default LoginPage;
