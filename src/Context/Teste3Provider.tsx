import { createContext, ReactNode } from "react";

interface ITeste3ProviderProps {
    children: ReactNode;
}

export const Teste3Context = createContext({});

export const Teste3Provider = ({ children }: ITeste3ProviderProps) => {
    return(
        <Teste3Context.Provider value={{ valorGlobal: 2 }}>
            {children}
        </Teste3Context.Provider>
    )
}