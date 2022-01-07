import React from "react";
import Select, { ActionMeta, MultiValue, SingleValue, StylesConfig } from "react-select";
import styled from "styled-components";

import { theme } from "../../core/theme/theme";
import { CustomError } from "../error/CustomError";
import { IOption, IOptions } from "./data";

interface Props {
  error?: string;
  label?: string;
  options: typeof IOptions;
  isMulti?: boolean;
  placement?: "top" | "bottom";
  onChange?: (
    newValue: MultiValue<IOption> | SingleValue<IOption>,
    actionMeta: ActionMeta<IOption>,
  ) => void;
}
export const CustomSelect = ({
  label,
  error,
  options,
  placement = "bottom",
  isMulti,
  onChange,
}: Props) => {
  return (
    <>
      <Label>{label}</Label>
      <Select
        closeMenuOnSelect={false}
        isMulti={isMulti}
        placeholder="Select..."
        defaultValue={options[0]}
        options={options}
        styles={Styles}
        menuPlacement={placement}
        onChange={onChange}
      />
      <CustomError>{error}</CustomError>
    </>
  );
};

const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 8px;
`;
const Styles: StylesConfig<IOption> = {
  control: (styles, { isMulti, menuIsOpen }) => ({
    ...styles,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.lightestGrey,
    cursor: "pointer",
    padding: `1px`,
    alignItems: "center",
    display: "flex",
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? theme.colors.darkRed : undefined,
      color: isSelected ? theme.colors.white : theme.colors.lightGrey,

      cursor: "pointer",
      ":active": {
        ...styles[":active"],
        backgroundColor: theme.colors.darkRed,
        color: theme.colors.white,
      },

      ":hover": {
        ...styles[":hover"],
        backgroundColor: theme.colors.lightRed,
        color: theme.colors.white,
      },
      ":not(:last-child)": {
        borderBottom: `1px solid ${theme.colors.lightestGrey}`,
      },
      transition: "all 0.05s linear",
    };
  },
  menuList: (styles) => ({
    ...styles,
    boxShadow: `0px 0px 5px ${theme.colors.lightestGrey2}`,
  }),
  placeholder: (styles) => ({ ...styles, color: theme.colors.grey }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: theme.colors.red,
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: theme.colors.white,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: theme.colors.white,
    ":hover": {
      backgroundColor: theme.colors.lightRed,
      color: theme.colors.darkRed,
    },
    transition: "all 0.05s linear",
  }),
};
