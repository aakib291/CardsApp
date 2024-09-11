import React from 'react';
import '../ShopCard.css'; // Import your CSS file

function ShopCard({ products }) {
  return (
    <div>
      <div className='flex flex-wrap px-4 lg:px-10'>
        {products && products.length > 0 ? (
          products.map((item, index) => {
            const { title, price, image, description } = item;
            return (
              <div key={index} className="p-2 md:w-1/4 w-full">
                <div className="relative bg-[#F8EFBA] dark:bg-gray-800 p-3 rounded-2xl shadow-lg border-2 border-gray-600 dark:border-gray-500 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-gray-400">
                  <img className='rounded-lg w-full mb-2 z-10 relative' src={image} alt={title} />
                  <div className="absolute inset-0 rounded-2xl bg-opacity-20 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-opacity-30 pointer-events-none" />
                  <div className="relative z-20">
                    <h2 className='text-xl text-black dark:text-white font-bold'>{title.substr(0, 20)}</h2>
                    <h2 className='text-xl text-black dark:text-white font-bold'>₹ {price}</h2>
                    <h2 className='text-lg text-black dark:text-white mb-2'>{description}</h2>
                    <div className="flex space-x-2 justify-between">
                      <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
                        Add to Cart
                      </button>
                      <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default ShopCard;
