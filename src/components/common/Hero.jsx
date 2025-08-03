import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import car1 from '../../assets/car1.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';

const Hero = () =>
{
    const carImages = [
        car3,
        car2,
        car1
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () =>
    {
        setCurrentIndex((prevIndex) =>
            prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () =>
    {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) =>
    {
        setCurrentIndex(index);
    };

    return (
        <section className="bg-gray-100 relative">
            <div className="text-center pt-12 pb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Luxury Cars,<br className="hidden md:block" /> Delivered Smarter.
                </h1>
            </div>

            {/* Carousel */}
            <div className="relative mx-4 md:mx-8 lg:mx-12">
                {/* Main slider container */}
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                    {/* Image container */}
                    <div className="relative h-64 md:h-80 lg:h-96">
                        <img
                            src={carImages[currentIndex]}
                            alt={`Car ${currentIndex + 1}`}
                            className="w-full h-full object-cover transition-opacity duration-500"
                        />

                        {/* Overlay gradient for better text readability if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {carImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                    ? 'bg-white scale-110'
                                    : 'bg-white/60 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Image counter */}
                <div className="text-center mt-4">
                    <span className="text-sm text-gray-600">
                        {currentIndex + 1} of {carImages.length}
                    </span>
                </div>
                <div className="mt-10 pb-12">
                    <div className="w-full bg-white px-8 py-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-lg font-semibold">Best Car Deals!</h3>
                        <p className="text-sm mt-1 mb-4 text-gray-600">
                            Enjoy 10% discount on all toyota mazda.
                        </p>
                        <button className="bg-black text-white px-6 py-2 rounded-md hover:opacity-90 transition">
                            Discover Now →
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
