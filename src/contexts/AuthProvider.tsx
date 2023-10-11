import React, {createContext, useContext, useState} from 'react';

type ContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<ContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

type PropTypes = {
  children: React.ReactElement;
};

const AuthProvider = ({children}: PropTypes) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
