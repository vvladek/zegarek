import React, { createContext, useState, ReactNode } from "react";


interface ContextProps {
  exampleValue: string;
  setExampleValue: React.Dispatch<React.SetStateAction<string>>;
};


const Context = createContext<ContextProps | undefined>(undefined);


export function ContextProvider ({ children }: Readonly<{ children: ReactNode }>) {
  const [exampleValue, setExampleValue] = useState<string>("default value");

  return (
    <Context.Provider value={{ exampleValue, setExampleValue }}>
      {children}
    </Context.Provider>
  );
};