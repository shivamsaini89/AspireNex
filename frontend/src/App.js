import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleScrape = async () => {
    setError('');
    setData({});
    try {
      const response = await axios.get(`http://localhost:5000/api/scrape?url=${encodeURIComponent(url)}`);
      setData(response.data);
    } catch (error) {
      setError('Failed to scrape data. Please check the URL and try again.');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'}`}>
      <div className={`max-w-3xl mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg overflow-hidden`}>
        <header className={`${darkMode ? 'bg-gray-700' : 'bg-indigo-600'} p-4 flex justify-between items-center`}>
          <h1 className="text-4xl m-4 font-bold text-white">E-commerce Product Scraper</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-indigo-300 text-black rounded hover:bg-indigo-400 transition duration-200"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <div className="p-6">
          <div className="mb-6">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter product page URL"
              className={`w-full p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded mb-4 ${darkMode ? 'bg-gray-700 text-white' : 'text-gray-700'} focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-gray-500' : 'focus:ring-indigo-600'}`}
            />
            <button
              onClick={handleScrape}
              className="w-full py-3 bg-indigo-600 text-white rounded text-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Scrape Product
            </button>
          </div>
          {error && <p className="text-center text-red-600 mb-4">{error}</p>}
          {data.title && (
            <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-6`}>
              <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
              <p className="mb-4">{data.description}</p>
              <p className="text-2xl text-indigo-600 mb-4">{(data.price === ".") ? "Currently Unavailable" : data.price}</p>
              {data.image && <img src={data.image} alt={data.title} className="w-full h-full object-cover mb-4 rounded-lg shadow-lg" />}
            </div>
          )}
        </div>
      </div>
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-800'} text-white py-4 mt-6`}>
        <div className="max-w-3xl mx-auto text-center">
          <p>&copy; 2024 E-commerce Product Scraper. All rights reserved.</p>
          <p>Designed by Shivam Saini</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
