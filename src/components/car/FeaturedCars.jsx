import React, { useState } from 'react';
import { Star, Heart, Eye, ArrowRight, Mail, CheckCircle } from 'lucide-react';

// Featured Cars Section
const FeaturedCars = () =>
{
    const featuredCars = [
        {
            id: 1,
            name: "Toyota Prius Hybrid",
            price: "2,800,000",
            image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop",
            brand: "Toyota",
            brandLogo: "🚗"
        },
        {
            id: 2,
            name: "Honda Fit",
            price: "1,450,000",
            image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=250&fit=crop",
            brand: "Honda",
            brandLogo: "🚗"
        },
        {
            id: 3,
            name: "Mazda Demio",
            price: "1,200,000",
            image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=250&fit=crop",
            brand: "Mazda",
            brandLogo: "🚗"
        },
        {
            id: 4,
            name: "Toyota Harrier",
            price: "3,500,000",
            image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop",
            brand: "Toyota",
            brandLogo: "🚗"
        },
        {
            id: 5,
            name: "Nissan X-Trail",
            price: "2,950,000",
            image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400&h=250&fit=crop",
            brand: "Nissan",
            brandLogo: "🚗"
        },
        {
            id: 6,
            name: "Toyota Land Cruiser V8",
            price: "8,500,000",
            image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=250&fit=crop",
            brand: "Toyota",
            brandLogo: "🚗"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Discover, Select, and Own the Perfect<br />Car for Your Journey
                    </h2>
                </div>

                {/* Search Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Brand</option>
                        <option>Toyota</option>
                        <option>Honda</option>
                        <option>Nissan</option>
                        <option>Mazda</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Model</option>
                        <option>Prius</option>
                        <option>Fit</option>
                        <option>Demio</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Type</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Hatchback</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Price</option>
                        <option>Under 2M</option>
                        <option>2M - 5M</option>
                        <option>Above 5M</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Year</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select>
                    <button className="bg-black text-white px-8 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                        Search
                    </button>
                </div>

                {/* Cars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredCars.map((car) => (
                        <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            {/* Header with brand logo and name */}
                            <div className="p-6 pb-0">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <span className="text-lg">{car.brandLogo}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Car Image */}
                            <div className="px-6 pb-6">
                                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                {/* Price and Details */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900">KSh {car.price}</span>
                                    </div>
                                    <button className="text-gray-600 hover:text-black flex items-center gap-2 text-sm">
                                        More Details
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4">
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                        ‹
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-black text-white rounded">
                        1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black">
                        2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black">
                        3
                    </button>
                    <span className="text-gray-400">–</span>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCars
