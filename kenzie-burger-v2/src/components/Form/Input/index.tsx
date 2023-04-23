import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

const Input = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div>
      <StyledInputContainer>
        <input ref={ref} {...rest} />
        {label ? <label>{label}</label> : null}
      </StyledInputContainer>
      {error ? (
        <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
      ) : null}
    </div>
  )
);

export default Input;
