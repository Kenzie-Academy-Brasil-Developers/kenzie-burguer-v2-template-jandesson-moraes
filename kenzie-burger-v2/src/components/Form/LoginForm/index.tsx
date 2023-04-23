import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, TLoginFormValues } from "./schemaLogin";

export interface ILoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { userLogin, setLoading, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type="email"
        label="Email"
        {...register("email")}
        disabled={loading}
        error={errors.email}
      />
      <Input
        type="password"
        label="Senha"
        {...register("password")}
        disabled={loading}
        error={errors.password}
      />
      <StyledButton
        $buttonSize="default"
        $buttonStyle="green"
        type="submit"
        disabled={loading}
      >
        {loading ? "Entrando..." : "Entrar"}
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
