import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ILoginFormData } from "../components/Form/LoginForm";
import { IRegisterFormData } from "../components/Form/RegisterForm";
import { toast } from "react-toastify";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;
  userLogin: (
    formData: ILoginFormData,
    setloading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: IRegisterFormData,
    setloading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userLogout: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUser {
  email: string;
  password: string;
  id: string;
  name: string;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
        const { name } = data;
        navigate(`/shop/${name}`);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
    };
    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const userLogin = async (
    formData: ILoginFormData,
    setloading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setloading(true);
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));

      setUser(data.user);
      const name = data.user.name;
      navigate(`/shop/${name}`);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  const userRegister = async (
    formData: IRegisterFormData,
    setloading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setloading(true);
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Cadastro realizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2990);
    } catch (error) {
      toast.error("Ops! Algo deu errado!");
    } finally {
      setloading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
        userLogout,
        loading,
        setLoading,
        isOpenModal,
        setIsOpenModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
