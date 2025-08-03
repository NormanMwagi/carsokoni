import React from 'react';
import { ArrowRight } from 'lucide-react';

const CarCategory = () =>
{
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Call to Action Section */}
                <div className="bg-gray-100 rounded-2xl p-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Own the Exceptional<br />Only at CarDealer
                    </h2>
                    <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto">
                        Discover Your Car
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Large background text */}
                    <div className="relative mt-8">
                        <div className="text-gray-200 text-9xl font-bold select-none opacity-20">
                            CD
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarCategory;