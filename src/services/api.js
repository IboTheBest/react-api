import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const getProduct = async (id) => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

