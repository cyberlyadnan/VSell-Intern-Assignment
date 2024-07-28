import React from 'react'

const CartItem = ({props}) => {
  return (
    <div key={props.id} className="flex sm:flex-row md:flex-row items-center lg:w-full bg-white p-4 mb-4 shadow rounded-lg">
              <img src={props.image} alt={props.name} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg" />
              <div className="flex flex-col md:flex-row justify-between w-full md:ml-4 mt-1 md:mt-0 ml-4">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">{props.name}</h2>
                  <p className="text-sm md:text-md text-gray-600">${props.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <label className="mr-2 text-gray-600">Qty:</label>
                  <input
                    type="number"
                    value={props.quantity}
                    className="w-12 p-1 border rounded text-center"
                    readOnly
                  />
                </div>
              </div>
            </div>
  )
}

export default CartItem
