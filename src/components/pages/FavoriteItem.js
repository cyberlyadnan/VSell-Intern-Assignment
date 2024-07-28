import React from 'react'

const FavoriteItem = ({item}) => {
  return (
    <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg"/>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                  <button className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                    Remove
                  </button>
                </div>
              </div>
  )
}

export default FavoriteItem
