import React, { createContext } from 'react';
import useAuth from './useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    setEmail,
    setPassword,
    authenticated,
    setAuthenticated,
    loading,
    handleLogin,
    handleLogout,
    redirect,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        setEmail,
        setPassword,
        authenticated,
        setAuthenticated,
        loading,
        handleLogin,
        handleLogout,
        redirect,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, AuthProvider };
