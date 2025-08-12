import React from 'react';
import { motion } from 'framer-motion';

const CarCategory = () =>
{
    const categories = [
        {
            id: 1,
            name: "SUVs",
            description: "Spacious and versatile for all terrains",
            count: "1,240+",
            icon: "🚙",
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
            bgColor: "bg-blue-50"
        },
        {
            id: 2,
            name: "Sedans",
            description: "Elegant and comfortable for daily commuting",
            count: "980+",
            icon: "🚗",
            image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
            bgColor: "bg-green-50"
        },
        {
            id: 3,
            name: "Pickups",
            description: "Powerful workhorses for heavy-duty tasks",
            count: "560+",
            icon: "🛻",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
            bgColor: "bg-amber-50"
        },
        {
            id: 4,
            name: "Luxury",
            description: "Premium vehicles with exceptional features",
            count: "320+",
            icon: "🏎️",
            image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
            bgColor: "bg-purple-50"
        },
        {
            id: 5,
            name: "Hatchbacks",
            description: "Compact and fuel-efficient city cars",
            count: "870+",
            icon: "🚘",
            image: "https://images.unsplash.com/photo-1549399542-7e845fec1fda",
            bgColor: "bg-red-50"
        },
        {
            id: 6,
            name: "Convertibles",
            description: "Enjoy the open road with top-down driving",
            count: "210+",
            icon: "🚕",
            image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
            bgColor: "bg-cyan-50"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Find Your Perfect Vehicle Category
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Explore our wide range of vehicle categories to find the perfect match for your lifestyle and needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className={`${category.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                                    {category.icon}
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                                    <p className="text-gray-200">{category.count} vehicles</p>
                                </div>
                            </div>

                            <div className="p-6 flex-grow">
                                <p className="text-gray-600 mb-4">{category.description}</p>
                                <div className="mt-auto">
                                    <button className="flex items-center text-blue-600 font-medium group">
                                        Explore {category.name}
                                        <svg
                                            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                        View All Categories
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CarCategory;