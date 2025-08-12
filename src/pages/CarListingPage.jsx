import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, filterCars, sortCars } from '../store/slices/carSlice';
import { ChevronDown, Filter, Search, ArrowDown, ArrowUp, Sliders } from 'lucide-react';

const CarListingPage = () =>
{
    const dispatch = useDispatch();
    const { items, loading, error, filters, sortBy } = useSelector((state) => state.cars);

    // Local state for UI controls
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const carsPerPage = 9;

    // Fetch cars on component mount
    useEffect(() =>
    {
        dispatch(fetchCars());
    }, [dispatch]);

    // Handle search input
    const handleSearch = (e) =>
    {
        setSearchTerm(e.target.value);
        dispatch(filterCars({ ...filters, searchTerm: e.target.value }));
    };

    // Handle filter changes
    const handleFilterChange = (filterType, value) =>
    {
        dispatch(filterCars({ ...filters, [filterType]: value }));
    };

    // Handle sort changes
    const handleSortChange = (sortType) =>
    {
        dispatch(sortCars(sortType));
    };

    // Reset all filters
    const resetFilters = () =>
    {
        dispatch(filterCars({
            priceRange: [0, 30000000],
            brands: [],
            categories: [],
            searchTerm: ""
        }));
        setSearchTerm('');
    };

    // Pagination logic
    const indexOfLastCar = activePage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = items.slice(indexOfFirstCar, indexOfLastCar);
    const totalPages = Math.ceil(items.length / carsPerPage);

    // Render car cards
    const renderCarCards = () =>
    {
        if (loading)
        {
            return (
                <div className="col-span-3 flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            );
        }

        if (error)
        {
            return (
                <div className="col-span-3 py-12 text-center">
                    <div className="text-red-500 bg-red-50 p-4 rounded-lg inline-block">
                        <p className="text-lg">Error loading cars: {error}</p>
                    </div>
                </div>
            );
        }

        if (currentCars.length === 0)
        {
            return (
                <div className="col-span-3 py-12 text-center">
                    <div className="text-gray-500 bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-xl font-medium mb-2">No cars found</h3>
                        <p className="mb-4">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={resetFilters}
                            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>
            );
        }

        return currentCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-200">
                <div className="relative">
                    <img
                        src={car.thumbnail}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center">
                        <span className="text-yellow-500 mr-1">★</span> {car.rating}
                    </div>
                </div>

                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">{car.brand} {car.model}</h3>
                            <p className="text-gray-500 text-sm">{car.year} • {car.specifications.fuelType}</p>
                        </div>
                        <div className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                            {car.category}
                        </div>
                    </div>

                    <div className="flex items-center mt-3 mb-4">
                        <span className="text-xl font-bold text-gray-900">KSh {car.price.toLocaleString('en-KE')}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="mr-1">⚙️</span> {car.specifications.transmission}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="mr-1">🛣️</span> {car.specifications.mileage}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="mr-1">👤</span> {car.specifications.seatingCapacity} seats
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="mr-1">🎨</span> {car.specifications.color}
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                            <span className="mr-1">❤️</span> Save
                        </button>
                        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-800 py-16 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Car</h1>
                    <p className="text-lg text-blue-100 max-w-3xl">
                        Browse our extensive collection of vehicles to find the perfect match for your needs and budget.
                    </p>
                </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden sticky top-0 z-10 bg-white border-b border-gray-200 py-3 px-4">
                <button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
                >
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filter Sidebar */}
                    <div className={`lg:w-1/4 ${mobileFiltersOpen ? 'fixed inset-0 z-20 bg-white overflow-y-auto' : 'hidden lg:block'}`}>
                        <div className="sticky top-0 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            {mobileFiltersOpen && (
                                <div className="flex justify-between items-center mb-6 pb-4 border-b">
                                    <h2 className="text-xl font-bold">Filters</h2>
                                    <button
                                        onClick={() => setMobileFiltersOpen(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Search</h3>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search by brand or model..."
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            value={searchTerm}
                                            onChange={handleSearch}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Price Range</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">KSh {filters.priceRange[0].toLocaleString('en-KE')}</span>
                                            <span className="text-gray-600">KSh {filters.priceRange[1].toLocaleString('en-KE')}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="30000000"
                                            value={filters.priceRange[1]}
                                            onChange={(e) => handleFilterChange('priceRange', (filters.priceRange[0], parseInt(e.target.value)))}
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Brands</h3>
                                    <div className="space-y-2">
                                        {['Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru', 'Mercedes', 'BMW'].map((brand) => (
                                            <label key={brand} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                    checked={filters.brands.includes(brand)}
                                                    onChange={() =>
                                                    {
                                                        const updatedBrands = filters.brands.includes(brand)
                                                            ? filters.brands.filter(b => b !== brand)
                                                            : [...filters.brands, brand];
                                                        handleFilterChange('brands', updatedBrands);
                                                    }}
                                                />
                                                <span className="ml-2 text-gray-700">{brand}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Categories</h3>
                                    <div className="space-y-2">
                                        {['SUV', 'Sedan', 'Hatchback', 'Luxury', 'Pickup', 'Convertible'].map((category) => (
                                            <label key={category} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                    checked={filters.categories.includes(category)}
                                                    onChange={() =>
                                                    {
                                                        const updatedCategories = filters.categories.includes(category)
                                                            ? filters.categories.filter(c => c !== category)
                                                            : [...filters.categories, category];
                                                        handleFilterChange('categories', updatedCategories);
                                                    }}
                                                />
                                                <span className="ml-2 text-gray-700">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={resetFilters}
                                    className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                            <div className="mb-4 sm:mb-0">
                                <h2 className="text-xl font-bold text-gray-900">
                                    {items.length} Cars Available
                                </h2>
                                <p className="text-gray-600">Refine your search to find the perfect match</p>
                            </div>

                            <div className="flex items-center">
                                <span className="mr-2 text-gray-700">Sort by:</span>
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => handleSortChange(e.target.value)}
                                        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="price_low">Price: Low to High</option>
                                        <option value="price_high">Price: High to Low</option>
                                        <option value="newest">Newest First</option>
                                        <option value="oldest">Oldest First</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Car Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {renderCarCards()}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center">
                                <nav className="flex items-center space-x-1">
                                    <button
                                        onClick={() => setActivePage(prev => Math.max(1, prev - 1))}
                                        disabled={activePage === 1}
                                        className={`p-2 rounded-full ${activePage === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
                                    >
                                        &lt;
                                    </button>

                                    {[...Array(totalPages)].map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActivePage(idx + 1)}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full ${activePage === idx + 1
                                                ? 'bg-black text-white'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {idx + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setActivePage(prev => Math.min(totalPages, prev + 1))}
                                        disabled={activePage === totalPages}
                                        className={`p-2 rounded-full ${activePage === totalPages ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
                                    >
                                        &gt;
                                    </button>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarListingPage;