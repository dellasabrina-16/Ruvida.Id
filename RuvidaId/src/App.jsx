// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import Category from "./pages/Category";
// import Application from "./pages/Application";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/katalog" element={<Category />} />
        {/* <Route path="/aplikasi/:id" element={<Application />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
