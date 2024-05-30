import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token && username) {
      setIsAuthenticated(true);
      setUser({ name: username });
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  const login = (username, token) => {
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setUser({ name: username });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
