import { createContext, useState, useContext } from "react";

export const BagContext = createContext({});

export const BagProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentDish, setCurrentDish] = useState({attributes:{}});
  const [modalPrice, setModalPrice] = useState(currentDish.price);
  const [open, setOpen] = useState(false);
  
  const [dados, setDados] = useState(null);

  const increment = (currentDish, quantity = 1) => {
    const newProducts = products.map((product) => {
      if (product.id === currentDish.id) {
        return {
          ...product,
          quantity: (product.quantity += quantity),
          totalPrice: (product.attributes.price * product.quantity).toFixed(2),
        };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  };

  const decrement = (currentDish, quantity = 1) => {
    const newProducts = products.map((product) => {
      if (product.id === currentDish.id) {
        return {
          ...product,
          quantity: (product.quantity -= quantity),
          totalPrice: (product.attributes.price * product.quantity).toFixed(2),
        };
      } else {
        return product;
      }
    });
    setProducts(newProducts);
  };

  const addProduct = (currentDish, quantity) => {
    const dish = products.filter((item) => item.id === currentDish.id)[0];

    if (!!dish) {
      const newProducts = products.map((product) => {
        if (product.id === currentDish.id) {
          return {
            ...product,
            quantity: (product.quantity += quantity),
            totalPrice: (product.attributes.price * product.quantity).toFixed(2),
          };
        } else {
          return product;
        }
      });
      setProducts(newProducts);
    } else {
      const newDish = {
        ...currentDish,
      };
      newDish.quantity = quantity;
      newDish.totalPrice = (newDish.attributes.price * newDish.quantity).toFixed(2);
      setProducts([...products, newDish]);
    }
  };

  const removeProduct = (currentDish) => {
    setProducts(products.filter((product) => product.id !== currentDish.id));
  };

  const subPrice = products
    .reduce((acc, product) => {
      return acc + parseFloat(product.totalPrice);
    }, 0)
    .toFixed(2);





  return (
    <BagContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        removeProduct,
        increment,
        decrement,
        modalPrice,
        setModalPrice,
        currentDish,
        setCurrentDish,
        subPrice,
        //frete,
        //restaurant,
        //setRestaurant,
        open,
        setOpen,
        dados,
        setDados,
      }}
    >
      {" "}
      {children}{" "}
    </BagContext.Provider>
  );
};

export const useBagProvider = () => useContext(BagContext);
