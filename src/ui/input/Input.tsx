import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

import closedEye from "../../assets/icons/close_eye_rounded.svg";
import openedEye from "../../assets/icons/eye_rounded.svg";
import { theme } from "../../core/theme/theme";
type Props = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Props {
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
          type={type}
          inputDisable={params.disabled}
          style={{
            color: params.disabled === true ? theme.colors.lightestGrey : theme.colors.grey,
            borderColor: params.error ? theme.colors.lightestRed : "transparent",
          }}
          {...params}
          ref={ref}
        />
        {params.type === "password" && type === "password" ? (
          <Icon>
            <img src={closedEye} alt="closed_eye" onClick={changeType} />
          </Icon>
        ) : params.type === "password" && type === "text" ? (
          <Icon>
            <img src={openedEye} alt="opened_eye" onClick={changeType} />
          </Icon>
        ) : null}
      </InputContainer>
      <Error>{params.error}</Error>
    </Container>
  );
});
Input.displayName = "CustomInput";

const Container = styled.div`
  position: relative;
  font-family: Avenir;
  font-style: normal;
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
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.grey};
`;
const CustomInput = styled.input<{ inputDisable: boolean | undefined }>`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${theme.colors.grey};
  background-color: ${theme.colors.lightestGrey1};
  transition: all 0.15s linear;
  :hover {
    background-color: ${({ inputDisable }) =>
      inputDisable === true ? theme.colors.lightestGrey1 : theme.colors.lightestGrey};
  }
  :focus {
    box-shadow: 0px 0px 5px ${theme.colors.lightestGrey2};
    outline: none;
  }
`;
const Error = styled.div`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${theme.colors.lightestRed};
`;
