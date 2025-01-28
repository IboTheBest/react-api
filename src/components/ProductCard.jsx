import React from "react"
export const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-contain p-4" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-xl font-bold mb-4">${price.toFixed(2)}</p>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">More</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Saved</button>
        </div>
      </div>
    </div>
  )
}

