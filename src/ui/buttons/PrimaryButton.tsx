import React, { FC, useState } from "react";
import styled from "styled-components";

import { theme } from "../../core/theme/theme";

interface Props {
  buttonType?: "default" | "disabled";
}

export const PrimaryButton: FC<Props> = ({ buttonType = "default", children }) => {
  const [click, setClick] = useState(false);
  const buttonClick = () => {
    setClick(!click);
  };
  return (
    <Button
      buttonType={buttonType}
      onClick={buttonClick}
      style={{
        backgroundColor: click === true && buttonType === "default" ? theme.colors.darkRed : "",
      }}
    >
      {children}
    </Button>
  );
};
const Button = styled.button<{ buttonType?: "default" | "disabled" }>`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  color: ${({ buttonType }) =>
    buttonType === "default" ? theme.colors.white : theme.colors.lightestGrey};
  border-radius: 4px;
  border: none;
  background-color: ${({ buttonType }) =>
    buttonType === "default" ? theme.colors.red : theme.colors.lightestGrey1};
  :hover {
    background-color: ${({ buttonType }) =>
      buttonType === "default" ? theme.colors.lightRed : null};
  }
  transition: all 0.1s linear;
`;
