import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

import addIcon from "../../assets/icons/add.svg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "secondary";
  svg?: "none" | "add";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  buttonType,
  disabled = false,
  svg = "none",
  onClick,
  children,
  ...rest
}) => {
  return (
    <>
      <CustomButton buttonType={buttonType} onClick={onClick} disabled={disabled} {...rest}>
        {svg === "add" ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            {children}
            <IconContainer>
              <Icon src={addIcon} alt="add" />
            </IconContainer>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </CustomButton>
    </>
  );
};
const CustomButton = styled.button<{ buttonType?: "primary" | "secondary"; disabled?: boolean }>`
  font-weight: 500;
  font-size: 15px;
  align-items: center;
  width: 100%;
  text-align: center;
  display: flex;
  line-height: 24px;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
  color: ${({ buttonType, theme, disabled }) =>
    buttonType === "primary" && disabled === false
      ? theme.colors.white
      : buttonType === "secondary" && disabled === false
      ? theme.colors.lightGrey
      : theme.colors.lightestGrey};
  border-radius: 4px;
  border: ${({ buttonType, theme, disabled }) =>
    buttonType === "secondary" && disabled === false
      ? `1px solid ${theme.colors.lightGrey}`
      : `none`};

  background-color: ${({ buttonType, theme, disabled }) =>
    buttonType === "primary" && disabled === false
      ? theme.colors.red
      : buttonType === "secondary" && disabled === false
      ? theme.colors.white
      : theme.lightestGrey1};
  :hover {
    background-color: ${({ buttonType, theme, disabled }) =>
      buttonType === "primary" && disabled === false
        ? theme.colors.lightRed
        : buttonType === "secondary" && disabled === false
        ? theme.colors.lightestGrey
        : null};
  }
  :active {
    background-color: ${({ buttonType, disabled, theme }) =>
      buttonType === "primary" && disabled === false
        ? theme.colors.darkRed
        : buttonType === "secondary" && disabled === false
        ? theme.colors.lightGrey
        : ""};
    color: ${({ buttonType, disabled, theme }) =>
      buttonType === "secondary" && disabled === false ? theme.colors.grey : ""};
  }
  transition: all 0.1s linear;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 16px;
  height: 16px;
`;
const Icon = styled.img`
  height: 9.33px;
  width: 9.33px;
`;
