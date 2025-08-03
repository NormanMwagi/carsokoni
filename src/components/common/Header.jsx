import React from 'react'
import { Phone, Mail } from 'lucide-react'

const Header = () =>
{
    return (
        <div className="bg-black text-white text-sm px-6 py-2 flex flex-wrap justify-between items-center">
            <p className="flex items-center gap-2"><span>📍</span>Rose Avenue, Kilimani, Nairobi</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> sales@carsoko.com</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +254 792037392</p>
        </div>
    );
}

export default Header
