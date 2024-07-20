import { useContext, createContext } from "react";

const BlockchainContext = createContext();

export const BlockchainProvider = ({ children }) => {

    return (
        <BlockchainContext.Provider value={{}}>
            {children}
        </BlockchainContext.Provider>
    )
}

export const useBlockchain = () => useContext(BlockchainContext);
