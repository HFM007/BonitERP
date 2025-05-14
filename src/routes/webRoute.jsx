import { Routes, Route } from "react-router-dom"

import Home from "../views/home"
import Login from "../views/auth/login"
import IndexProduct from "../views/product/indexProduct"

export default function RouteIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<IndexProduct />} />
    </Routes>
  )
}