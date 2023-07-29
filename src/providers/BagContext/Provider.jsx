import { createContext, useState, useContext } from "react";

export const BagContext = createContext({});

 export const BagProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [currentDish, setCurrentDish] = useState({})
    const [modalPrice, setModalPrice] = useState(currentDish.price);
    // const [quantity, setQuantity] = useState(1) 
    const [finalPrice, setFinalPrice] = useState()

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        setQuantity(quantity - 1)
    }

    const addProduct = (currentDish, quantity) => {
        const dish = products.filter((item) => item.id === currentDish.id)[0];
        
        if (!!dish) {
            const newProducts = products.map((product) => {
                if (product.id === currentDish.id) {
                    return { 
                        ...product, 
                        quantity: product.quantity += quantity 
                    };
                } else {
                    return product;
                }
            });
            setProducts(newProducts);
        } else {
            const newDish = { ...currentDish };
            newDish.quantity = quantity; 
            setProducts([...products, newDish]);
        }
    };
  

    const removeProduct = (currentDish) => { 
        setProducts(products.filter(item => item.id !== currentDish.id))
    }       

    return (
        <BagContext.Provider value={{products, addProduct, removeProduct, increment, decrement, modalPrice, setModalPrice, currentDish, setCurrentDish}}>
            {children}
        </BagContext.Provider> 
    );
}

export const useBagProvider = () => useContext(BagContext);