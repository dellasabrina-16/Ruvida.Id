import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const MOCK_USER = {
  isLoggedIn: true,
  username: "Llaaa_sabbb",
  email: "llaaaa19@gmail.com",
  joinDate: "10 Juli 2026",
  isPremium: true,
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(MOCK_USER);

  // Nanti diganti dengan API call
  const login = (userData) => setUser({ isLoggedIn: true, ...userData });
  const logout = () => setUser({ isLoggedIn: false });

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
