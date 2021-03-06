import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

import { EyeIcon } from "../../assets/icons/EyeIcon";
import { CustomError } from "../error/CustomError";
import { InputCss } from "./style";

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
        {params.type === "password" && (
          <Icon onClick={changeType}>
            <EyeIcon type={type} />
          </Icon>
        )}
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
  width: auto;
`;

const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
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
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 8px;
`;

const CustomInput = styled.input<{
  inputDisable: boolean | undefined;
  error?: string;
}>`
  ${InputCss};
  ::-webkit-calendar-picker-indicator {
    filter: invert(75%);
    :hover {
      filter: invert(100%);
    }
  }
  width: 100%;
  color: ${({ inputDisable, theme }) =>
    inputDisable === true ? theme.colors.lightestGrey : theme.colors.grey};
  border-color: ${({ theme, error }) =>
    error ? theme.colors.lightestRed : theme.colors.lightestGrey1};
  background-color: ${({ theme }) => theme.colors.lightestGrey1};
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
