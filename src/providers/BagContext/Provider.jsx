import { createContext, useState, useContext } from "react";

export const BagContext = createContext({});

 export const BagProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (currentDish) => {
        const dish = products.filter((item) => item.id === currentDish.id)[0];
        
        if (!!dish) {
            const newProducts = products.map((product) => {
                if (product.id === currentDish.id) {
                    return { ...product, quantity: product.quantity += 1 };
                } else {
                    return product;
                }
            });

            console.log(newProducts);
            
            setProducts([
                ...products, 
                ...newProducts
            ]);
        } else {
            const newDish = { ...currentDish };
            newDish.quantity = 0; 
            setProducts([...products, newDish]);
        }
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