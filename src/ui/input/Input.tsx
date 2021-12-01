import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

import closedEye from "../../assets/icons/close_eye_rounded.svg";
import openedEye from "../../assets/icons/eye_rounded.svg";
import { CustomError } from "../error/CustomError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((params, ref) => {
  const [type, setType] = useState(params.type);

  const changeType = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <Container>
      <Label>{params.label}</Label>
      <InputContainer>
        <CustomInput
          {...params}
          type={type}
          inputDisable={params.disabled}
          error={params.error}
          ref={ref}
        />
        <Icon>
          <img
            src={
              params.type === "password" && type === "password"
                ? closedEye
                : params.type === "password" && type === "text"
                ? openedEye
                : ""
            }
            alt={params.type === "password" && (type === "password" || "text") ? "eye" : ""}
            onClick={changeType}
          />
        </Icon>
      </InputContainer>
      <CustomError>{params.error}</CustomError>
    </Container>
  );
});
Input.displayName = "CustomInput";

const Container = styled.div`
  position: relative;
  font-weight: 500;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
`;
const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 12px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grey};
`;
const CustomInput = styled.input<{ inputDisable: boolean | undefined; error?: string }>`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${({ inputDisable, theme }) =>
    inputDisable === true ? theme.colors.lightestGrey : theme.colors.grey};
  border-color: ${({ theme, error }) =>
    error ? theme.colors.lightestRed : theme.colors.lightestGrey1};
  transition: all 0.15s linear;
  :hover {
    background-color: ${({ inputDisable, theme }) =>
      inputDisable === true ? null : theme.colors.lightestGrey};
  }
  :focus {
    box-shadow: ${({ theme }) => ` 0px 0px 5px ${theme.colors.lightestGrey2}`};
    outline: none;
  }
`;
