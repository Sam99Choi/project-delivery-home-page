import { createContext, useState, useContext } from "react";

export const BagContext = createContext({});

 export const BagProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (title, price ) => {
        const itemObject = {title, price};
        setProducts([...products, itemObject]);
    };

    const removeProduct = (products) => {
        
    };

    return (
        <BagContext.Provider value={{products, addProduct, removeProduct}}>
            {children}
        </BagContext.Provider>
    );
}

export const useBagProvider = () => useContext(BagContext);