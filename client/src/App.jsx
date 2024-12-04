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
import UnAuthPage from "./common/un-auth";
import CheckAuth from "./common/check-atuh";
function App() {

  const isAuthenticated = true;
  const user = {
    name: "abul",
    role: "user"
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <p>common Header</p>
      <Routes>
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}> <AuthLayout /></CheckAuth>}>
          <Route path="login" element={<AuthLogin />}></Route>
          <Route path="register" element={<AuthRegister />}></Route>
        </Route>
        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}> <AdminLayout /></CheckAuth>}>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="products" element={<AdminProducts />}></Route>
          <Route path="orders" element={<AdminOrders />}></Route>
          <Route path="features" element={<AdminFeatures />}></Route>
        </Route>
        <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}> <ShoppingLayout /></CheckAuth>}>
          <Route path="home" element={<ShoppingHome />}></Route>
          <Route path="account" element={<ShoppingAccount />}></Route>
          <Route path="listing" element={<ShoppingListing />}></Route>
          <Route path="checkout" element={<ShoppingCheckout />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/un-auth" element={<UnAuthPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
