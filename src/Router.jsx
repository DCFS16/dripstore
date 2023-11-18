import { Routes,Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import { Categories } from "./pages/Categories/Categories";
import { ProductList } from "./pages/ProductListPage/ProductList";
import { MyOrders } from "./pages/MyOrders/MyOrders";




export const Router = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage /> } />
      <Route path="/categorias" element={<Categories /> } />
      <Route path="/lista-de-produtos" element={<ProductList /> } />
      <Route path="/minhas-compras" element={<MyOrders /> } />

    </Routes>

  );
};