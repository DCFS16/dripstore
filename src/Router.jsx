import { Routes,Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import { Categories } from "./pages/Categories/Categories";
import { ProductList } from "./pages/ProductListPage/ProductList";
import { MyOrders } from "./pages/MyOrders/MyOrders";
import { ProductDatails } from "./pages/ProductDatails/ProductDatails";




export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/categorias" element={<Categories /> } />
      <Route path="/produtos" element={<ProductList /> } />
      <Route path="/produtos/:slug" element={<ProductDatails /> } />
      <Route path="/minhas-compras" element={<MyOrders /> } />
    </Routes>

  );
};
