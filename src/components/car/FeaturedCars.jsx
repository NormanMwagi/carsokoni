import React, { useState, useEffect } from 'react';
import { Star, Heart, Eye, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { fetchCars } from '../../store/slices/carSlice';
import { useDispatch, useSelector } from 'react-redux';

// Featured Cars Section
const FeaturedCars = () =>
{
    const [cars, setCars] = useState([]);
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.cars);

    useEffect(() =>
    {
        dispatch(fetchCars());
    }, [dispatch]);

    if (loading)
    {
        return (
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-700">Loading featured cars...</p>
                </div>
            </section>
        );
    }

    // Show error state
    if (error)
    {
        return (
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-red-500 bg-red-100 p-4 rounded-lg inline-block">
                        <p className="text-lg">Error loading cars: {error}</p>
                    </div>
                </div>
            </section>
        );
    }

    // Get first 6 cars as featured
    const featuredCars = items.slice(0, 6);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Discover, Select, and Own the Perfect<br />Car for Your Journey
                    </h2>
                </div>

                {/* Cars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredCars.map((car) => (
                        <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            {/* Header with brand logo and name */}
                            <div className="p-6 pb-0">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{car.brand} {car.model}</h3>
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <span className="text-lg">🚗</span>
                                    </div>
                                </div>
                            </div>

                            {/* Car Image */}
                            <div className="px-6 pb-6">
                                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={car.thumbnail}
                                        alt={`${car.brand} ${car.model}`}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>

                                {/* Price and Details */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-gray-900">
                                            KSh {car.price.toLocaleString('en-KE')}
                                        </span>
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
            </div>
        </section>
    );
};

export default FeaturedCars;