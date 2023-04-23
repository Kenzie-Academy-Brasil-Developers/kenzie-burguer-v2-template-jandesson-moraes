import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface ICartProviderProps {
  children: React.ReactNode;
}

export interface ICart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  toLowerCase(): "";
}

export interface IproductCartList {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
}

interface IRemoveAll {
  (): void;
}

export interface ICartContext {
  productList: ICart[];
  addProductToCart: (product: ICart) => void;
  removeProductToList: (productId: number) => void;
  favoriteList: IproductCartList[];
  setFavoriteList: React.Dispatch<React.SetStateAction<IproductCartList[]>>;
  setRemoveAll: React.Dispatch<React.SetStateAction<IRemoveAll[]>>;
  removeProductsAllCart: () => void;
  total: number;
  filterProductList: ICart[];
  filter: "" | ICart;
  setfilter: React.Dispatch<React.SetStateAction<"" | ICart>>;
  setSearchInput: React.Dispatch<React.SetStateAction<"" | ICart>>;
  searchInput: "" | ICart;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [productList, setProductList] = useState<ICart[]>([]);
  const [favoriteList, setFavoriteList] = useState<IproductCartList[]>([]);
  const [removerAll, setRemoveAll] = useState<IRemoveAll[]>([]);
  const [filter, setfilter] = useState<ICart | "">("");
  const [searchInput, setSearchInput] = useState<ICart | "">("");

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const loadProduct = async () => {
      try {
        const { data } = await api.get<ICart[]>("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProduct();
  }, []);

  const addProductToCart = (product: ICart) => {
    try {
      const newProductList = [...favoriteList, product];
      setFavoriteList(newProductList);
      toast.success("Produto adicionado com sucesso!");
    } catch (error) {
      console.log("Opes!, Erro");
    }
  };

  const removeProductToList = (productId: number) => {
    const newFavoriteCart = favoriteList.filter(
      (currentProduct) => currentProduct.id !== productId
    );
    setFavoriteList(newFavoriteCart);
    toast.success("Produto removido com sucesso!");
  };

  const removeProductsAllCart = () => {
    setFavoriteList([]);
  };

  const filterProductList = productList.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase())
  );

  const total = favoriteList.reduce((previusValue, currentValue) => {
    return previusValue + currentValue.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        productList,
        addProductToCart,
        removeProductToList,
        favoriteList,
        setFavoriteList,
        setRemoveAll,
        removeProductsAllCart,
        filterProductList,
        setfilter,
        filter,
        total,
        searchInput,
        setSearchInput,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
