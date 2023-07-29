import {createContext, useState, useContext} from "react";

export const BagContext = createContext({});

export const BagProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [currentDish, setCurrentDish] = useState({})
  const [modalPrice, setModalPrice] = useState(currentDish.price);
  
  const increment = (currentDish, quantity = 1) => {
    const newProducts = products.map((product) => {
      if (product.id === currentDish.id) {
        return {
          ...product,
          quantity: product.quantity += quantity,
          totalPrice: (product.price * product.quantity).toFixed(2),
        };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }

  const decrement = (currentDish, quantity = 1) => {
    const newProducts = products.map((product) => {
      if (product.id === currentDish.id) {
        return {
          ...product,
          quantity: product.quantity -= quantity,
          totalPrice: (product.price * product.quantity).toFixed(2),
        };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  }

  const addProduct = (currentDish, quantity) => {
    const dish = products.filter((item) => item.id === currentDish.id)[0];

    if (!! dish) {
      const newProducts = products.map((product) => {
        if (product.id === currentDish.id) {
          return {
            ...product,
            quantity: product.quantity += quantity,
            totalPrice: (product.price * product.quantity).toFixed(2),
          };
        } else {
          return product;
        }
      });
      setProducts(newProducts);
    } else {
      const newDish = {
        ...currentDish
      };
      newDish.quantity = quantity;
      newDish.totalPrice = (newDish.price * newDish.quantity).toFixed(2);
      setProducts([
        ...products,
        newDish
      ]);
    }
  };

  const removeProduct = (currentDish) => {
    setProducts(products.filter(item => item.id !== currentDish.id))
  }

  const totalPrice = products.reduce((acc, product) => {
    return acc + parseFloat(product.totalPrice);
  }, 0).toFixed(2);

  return (<BagContext.Provider value={
    {
      products,
      addProduct,
      removeProduct,
      increment,
      decrement,
      modalPrice,
      setModalPrice,
      currentDish,
      setCurrentDish,
      totalPrice
    }
  }> {children} </BagContext.Provider>);
}

export const useBagProvider = () => useContext(BagContext);
