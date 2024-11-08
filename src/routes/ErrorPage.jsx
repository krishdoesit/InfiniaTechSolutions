// ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-2xl mx-auto px-4 py-8 text-center">
                <div className="animate-bounce mb-8">
                    <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        404
                    </h1>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-8 max-w-md mx-auto text-xl">
                    We're sorry, but the page you're looking for cannot be found.
                    It might have been moved, deleted, or never existed.
                </p>

                <div className="space-y-4 sm:space-y-0 sm:space-x-4">

                    <Link to="/"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
                        Home Page
                    </Link>
                </div>
            </div>
        </div>
    )
}
