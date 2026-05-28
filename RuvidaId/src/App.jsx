// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import Category from "./pages/Category";
import Application from "./pages/Application";
import ProductDetails from "./pages/ProductDetails";
import { AuthProvider } from "./context/AuthContext";
import Chatbot from "./pages/Chatbot";
import Account from "./pages/Account";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/katalog" element={<Category />} />
          <Route path="/aplikasi/:id" element={<Application />} />
          <Route
            path="/aplikasi/:kategori/:produk"
            element={<ProductDetails />}
          />
          <Route path="custom" element={<Chatbot />}/>
          <Route path="akun" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
