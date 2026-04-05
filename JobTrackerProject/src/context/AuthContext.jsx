import { createContext, useState } from "react";
import API from "../config/api";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // LOGIN

const login = async (formData) => {
  const res = await API.post("/auth/login", formData);

  localStorage.setItem("token", res.data.token);

  // 🔥 IMPORTANT
  setAuthToken();
};

  // REGISTER
  const register = async (formData) => {
    await API.post("/auth/register", formData);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};