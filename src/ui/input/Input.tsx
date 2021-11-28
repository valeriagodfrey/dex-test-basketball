import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

import { theme } from "../../core/theme/theme";
import ClosedEye from "../assets/icons/close_eye_rounded.svg";
import OpenedEye from "../assets/icons/eye_rounded.svg";
type Props = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Props {
  inputType?: "text" | "password";
  error?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((params, ref) => {
  const [type, setType] = useState("password");
  const changeType = () => {
    if (type === "password") {
      setType("text");
    } else setType("password");
  };
  return (
    <Container>
      <Label>{params.label}</Label>
      <CustomInput
        inputDisable={params.disabled}
        style={{
          color: params.disabled === true ? theme.colors.lightestGrey : theme.colors.grey,
          borderColor: params.error ? theme.colors.lightestRed : "transparent",
        }}
        {...params}
        ref={ref}
      >
        {/* {params.type === "password" && type === "password" ? (
          <div>
            {params.value}
            <img src={ClosedEye} alt="closed_eye" onClick={changeType} />
          </div>
        ) : params.type === "password" && type === "text" ? (
          <div>
            {params.value}
            <img src={OpenedEye} alt="opened_eye" onClick={changeType} />
          </div>
        ) : (
          <div>Hello</div>
        )} */}
      </CustomInput>
      <Error>{params.error}</Error>
    </Container>
  );
});
Input.displayName = "CustomInput";

const Container = styled.div`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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
  line-height: 24px;
  padding: 8px;
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
    box-shadow: 0px 0px 5px #d9d9d9;
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
