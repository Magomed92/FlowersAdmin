import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Category from "./pages/Category";
import Home from "./pages/Product";
import { Products } from "./pages/Products";
import Orders from "./pages/Orders";
import Stock from "./pages/Stock";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/stock",
    element: <Stock />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/products/edit/:productsId",
    element: <Products />,
  },
  {
    path: "/products/create",
    element: <Products />,
  },
];
export default function App() {
  return (
    <div>
      <AdminLayout>
        <Routes>
          {routes.map((item) => (
            <Route {...item} />
          ))}
        </Routes>
      </AdminLayout>
    </div>
  );
}
