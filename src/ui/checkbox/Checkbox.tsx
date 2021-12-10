import React from "react";
import styled from "styled-components";

import checkIcon from "../../assets/icons/check.svg";
import disabledCheck from "../../assets/icons/disabled_check.svg";
import { CustomError } from "../error/CustomError";

interface Props {
  label?: string;
  disabled?: boolean;
  error?: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}
export const Checkbox = ({ label, disabled, error, checked, onChange }: Props) => {
  return (
    <Container>
      <CheckboxContainer>
        <CustomCheckbox
          checked={checked}
          onClick={(value) => onChange(!value)}
          disabled={disabled}
          error={error}
        >
          <Icon
            checked={checked}
            src={checked && disabled !== true ? checkIcon : disabledCheck}
            alt="check"
          />
        </CustomCheckbox>
        <Label
          checked={checked}
          disabled={disabled}
          error={error}
          onClick={(value) => onChange(!value)}
        >
          {label}
        </Label>
      </CheckboxContainer>
      <CustomError>{checked === false ? error : null}</CustomError>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckboxContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;
const CustomCheckbox = styled.div<{ disabled?: boolean; error?: string; checked?: boolean }>`
  width: 12px;
  height: 12px;
  border: 1px solid;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  border-radius: 2px;
  margin-right: 10px;
  background-color: ${({ disabled, theme }) =>
    disabled === true ? theme.colors.lightestGrey1 : theme.colors.white};
  border-color: ${({ disabled, error, theme }) =>
    disabled === true
      ? theme.colors.lightestGrey
      : error
      ? theme.colors.lightestRed
      : theme.colors.lightGrey};

  :hover {
    border-color: ${({ disabled, theme }) => (disabled === true ? null : theme.colors.red)};
  }
  transition: all 0.15s linear;
`;
const Icon = styled.img<{ checked?: boolean }>`
  position: absolute;
  top: -1px;
  left: -1px;
  visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
`;
const Label = styled.div<{
  disabled?: boolean;
  error?: string;
  checked?: boolean;
}>`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ disabled, error, checked, theme }) =>
    disabled === true || (checked === true && disabled !== false)
      ? theme.colors.lightestGrey
      : error && !checked
      ? theme.colors.lightestRed
      : theme.colors.grey};
  padding-top: 1px;
`;
