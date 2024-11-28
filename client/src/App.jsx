import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import NotFound from "./pages/not-found";
import { Route, Routes } from "react-router-dom";
import AuthRegister from "./pages/auth/register";
import ShoppingLayout from "./components/shop/layout";
import ShoppingAccount from "./pages/shop/shopping-acount";
import ShoppingHome from "./pages/shop/home";
import ShoppingListing from "./pages/shop/shopping-listing";
import ShoppingCheckout from "./pages/shop/shopping-checkout";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./pages/admin/admin-dashboard";
import AdminProducts from "./pages/admin/admin-products";
import AdminOrders from "./pages/admin/admin-orders";
import AdminFeatures from "./pages/admin/admin-features";
function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <p>common Header</p>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />}></Route>
          <Route path="register" element={<AuthRegister />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="products" element={<AdminProducts />}></Route>
          <Route path="orders" element={<AdminOrders />}></Route>
          <Route path="features" element={<AdminFeatures />}></Route>
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />}></Route>
          <Route path="account" element={<ShoppingAccount />}></Route>
          <Route path="listing" element={<ShoppingListing />}></Route>
          <Route path="checkout" element={<ShoppingCheckout />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
