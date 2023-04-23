import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export interface IRegisterFormData {
  email: string;
  password: string;
  name: string;
}

const RegisterForm = () => {
  const { userRegister, loading, setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        type="text"
        placeholder="Digite seu nome"
        {...register("name")}
        disabled={loading}
        error={errors.name}
      />
      <Input
        id="email"
        type="email"
        placeholder="email"
        {...register("email")}
        disabled={loading}
        error={errors.email}
      />
      <Input
        id="passwors"
        type="password"
        placeholder="Criar senha"
        {...register("password")}
        disabled={loading}
        error={errors.password}
      />
      <Input
        id="confirmPassword"
        type="password"
        placeholder="Confirmar senha"
        {...register("confirmPassword")}
        disabled={loading}
        error={errors.confirmPassword}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray" type="submit">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
