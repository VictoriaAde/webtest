import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  username: string;
  password: string;
  updateUserDetails: (name: string, value: string) => void;
};
type AuthProviderProps = {
  children: React.ReactElement;
};

export const AuthContext = createContext<AuthContextType>({
  username: "",
  password: "",
  updateUserDetails: (name: string, value: string) => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (username && password) {
      timerId = setTimeout(() => {
        setUsername("");
        setPassword("");
      }, 5000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [username, password]);
  const updateUserDetails = (name: string, value: string): void => {
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <AuthContext.Provider value={{ username, password, updateUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};
export default useGlobalAuthContext;
