import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () =>
{
    return (
        <>
            <div className="bg-black flex p-4 items-center justify-between gap-1 ">
                <p className="text-white underline flex">Rose Avenue, Kilimani Nairobi</p>
                <p className="text-white underline flex"><Mail />sales@carsoko.com</p>
                <p className="text-white underline flex"><Phone />+254 792037392</p>
            </div>
            <div className="h-14 bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-between px-4">
                <h3 className='text-white font-semibold text-2xl'>Carsoko</h3>
                <ul className='flex items-center justify-between'>
                    <li className='text-white font-semibold inline-block px-4'>Home</li>
                    <li className='text-white font-semibold inline-block px-4'>About Us</li>
                    <li className='text-white font-semibold inline-block px-4'>Services</li>
                    <li className='text-white font-semibold inline-block px-4'>Contact Us</li>
                    <li className='text-white font-semibold inline-block px-4'>Blog</li>
                </ul>
                <div className='flex items-center justify-between'>
                    <Link to="/login" className='bg-white text-black px-4 py-2 rounded'>Login</Link>
                    <Link to="/register" className='bg-white text-black px-4 py-2 rounded ml-2'>Register</Link>
                </div>
            </div>
        </>
    )
}

export default Header
