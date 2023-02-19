import { createContext, useContext } from "react";

type AuthContextType = {
  username: string;
  password: string;
};
type AuthProviderProps = {
  children: React.ReactElement;
};

export const AuthContext = createContext<AuthContextType>({
  username: "",
  password: "",
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = "adedayovicky123@gmail.com";
  const pass = "vic";

  return (
    <AuthContext.Provider value={{ username: user, password: pass }}>
      {children}
    </AuthContext.Provider>
  );
};

const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};
export default useGlobalAuthContext;
