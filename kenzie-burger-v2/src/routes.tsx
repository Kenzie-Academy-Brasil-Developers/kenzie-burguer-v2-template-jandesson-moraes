import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import { ProtectRoutes } from "./components/ProtectRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/shop/:name" element={<ProtectRoutes />}>
        <Route index element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
