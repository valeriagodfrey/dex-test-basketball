import React from "react";
import Select, { StylesConfig } from "react-select";

import { theme } from "../../core/theme/theme";
import { IOption, IOptions } from "./data";

interface Props {
  options: typeof IOptions;
}
export const Multiselect = ({ options }: Props) => {
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      placeholder="Select..."
      defaultValue={options[0]}
      options={options}
      styles={Styles}
    />
  );
};

const Styles: StylesConfig<IOption> = {
  control: (styles, { menuIsOpen }) => ({
    ...styles,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.lightestGrey,
    outline: menuIsOpen ? 0 : undefined,
    cursor: "pointer",
    padding: `1px`,
    alignItems: "center",
    display: "flex",
    ":hover": {
      ...styles[":hover"],
      borderColor: theme.colors.lightestGrey,
    },
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
      transition: "all 0.05s linear",
      ":nth-last-child": {
        ...styles[":nth-last-child"],
        borderBottom: theme.colors.lightGrey,
      },
    };
  },
  menuList: (styles) => ({ ...styles, boxShadow: `0px 0px 5px ${theme.colors.lightestGrey2}` }),
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
      backgroundColor: "pink",
      color: "blue",
    },
  }),
};
