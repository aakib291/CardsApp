import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShopCard from './components/ShopCard';
import { FaMoon, FaSun } from 'react-icons/fa';
import './index.css'; // Ensure global styles are imported

function App() {
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme; // Apply theme to root element
  }, [theme]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://myfirstapi-data.vercel.app');
        setProducts(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <button 
        onClick={toggleTheme} 
        className='fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <ShopCard products={products} />
    </div>
  );
}

export default App;
