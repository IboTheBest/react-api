import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { ProductPage } from "./pages/ProductPage"
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

