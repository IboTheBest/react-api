import { useProduct } from "../hooks/useProduct"
import { ProductCard } from "../components/ProductCard"
import React from "react"
export const ProductPage = () => {
  const { product, loading, error } = useProduct(10)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!product) return null

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard image={product.thumbnail} name={product.title} price={product.price} />
      </div>
    </div>
  )
}

