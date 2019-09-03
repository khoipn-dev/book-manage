import React, { useState } from "react";

export const LoaderContext = React.createContext();

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <LoaderContext.Provider
      value={{
        loading: loading,
        setLoading: setLoading
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}
