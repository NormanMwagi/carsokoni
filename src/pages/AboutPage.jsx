import React from 'react';
import Header from '../components/common/Header';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { FaUsers, FaBullseye, FaLightbulb } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517994112540-009c473b6d58?w=1200&h=400&fit=crop')" }}>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">About Carsoko</h1>
          </div>
        </div>

        {/* Company Overview */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2023, Carsoko was born from a passion for connecting people with their dream cars. We noticed a gap in the market for a transparent, user-friendly platform where car enthusiasts and everyday buyers alike could explore, compare, and purchase vehicles with confidence. Our journey started with a small team of dedicated individuals and has since grown into a leading online car marketplace in the region.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <FaBullseye className="text-5xl text-red-500 mx-auto md:mx-0 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower customers by providing a comprehensive and trustworthy platform for buying and selling cars, while delivering exceptional value and a seamless user experience.
              </p>
            </div>
            <div className="text-center md:text-left">
              <FaLightbulb className="text-5xl text-blue-500 mx-auto md:mx-0 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative online car marketplace, known for our extensive selection, cutting-edge technology, and unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=300&h=300&fit=crop" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800">John Doe</h4>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800">Jane Smith</h4>
                <p className="text-gray-500">Head of Operations</p>
              </div>
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://images.unsplash.com/photo-1528892952291-009c663ce843?w=300&h=300&fit=crop" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800">Mike Johnson</h4>
                <p className="text-gray-500">Lead Developer</p>
              </div>
              {/* Team Member 4 */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=300&h=300&fit=crop" alt="Team Member 4" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800">Sarah Williams</h4>
                <p className="text-gray-500">Marketing Director</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;