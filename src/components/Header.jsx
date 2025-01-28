import { ShoppingCart } from "lucide-react"
import React from "react"
export const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Project</h1>
        <div className="flex items-center gap-4">
          <input type="search" placeholder="Search products" className="px-4 py-2 border rounded-lg w-[300px]" />
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              5
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

