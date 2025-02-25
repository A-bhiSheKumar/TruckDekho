
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

// Custom hook

export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider

export const AuthProvider = ({ children }) => {

  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isMobileverified, setIsMobileverified] = useState(false);
  const [isEmailverified, setIsEmailverified] = useState(false);

  const [token, setToken] = useState(null);

  useEffect(() => {
    const jwtToken = Cookies.get("jwt");
    if (jwtToken) {
      try {
        setToken(jwtToken);
      } catch (error) {
        console.error("Token verification error:", error);
      }
    }
  }, []);

  const login = (jwtToken) => {
    setToken(jwtToken);
    Cookies.set("jwt", jwtToken, { httpOnly: true, secure: true });
  };

  const logout = () => {
    localStorage.setItem("jwt", "");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isMobileverified, setIsMobileverified, mobileNumber, setMobileNumber, email, setEmail, isEmailverified, setIsEmailverified }}>
      {children}
    </AuthContext.Provider>
  );
};

