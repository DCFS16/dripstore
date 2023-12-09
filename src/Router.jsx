import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Categories } from "./pages/Categories/Categories";
import { ProductList } from "./pages/ProductListPage/ProductList";
import { MyOrders } from "./pages/MyOrders/MyOrders";
import { ProductDatails } from "./pages/ProductDatails/ProductDatails";
import { Register } from "./pages/Register/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/produtos" element={<ProductList />} />
        <Route path="/produtos/:slug" element={<ProductDatails />} />
        <Route path="/minhas-compras" element={<MyOrders />} />
        <Route path="/cadastro" element={<Register />} />
      </Route>
    </Routes>
  );
};
