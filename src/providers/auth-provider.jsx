import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!user) {
      setAuthenticated(false);
      return;
    }
    setAuthenticated(true);
  }, [user]);

  const signin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const signout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // const isAuthenticated = !!user;

  //     console.log(user)
  //     if (user) {
  //       setAuthenticated(true);
  //     }
  //   }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, signin, signout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("component must be wrapped in provider");
  }

  return context;
};

export { AuthProvider as default, AuthContext, useAuthContext };
