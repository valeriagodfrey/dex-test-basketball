import React, { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

import searchIcon from "../../assets/icons/search.svg";

type Props = InputHTMLAttributes<HTMLInputElement>;

type SearchProps = Props;
export const SearchInput = forwardRef<HTMLInputElement, SearchProps>((params, ref) => {
  return (
    <>
      <SearchContainer>
        <Search {...params} ref={ref}></Search>
        <Icon>
          <img src={searchIcon} alt="search" />
        </Icon>
      </SearchContainer>
    </>
  );
});
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 12px;
`;
const Search = styled.input`
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  display: flex;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.grey};
  border: ${({ theme }) => `0.5px solid ${theme.colors.lightestGrey}`};
  background-color: ${({ theme }) => theme.colors.white};
  :hover {
    box-shadow: ${({ theme }) => ` 0px 0px 5px ${theme.colors.lightestGrey2}`};
  }
  :focus {
    box-shadow: ${({ theme }) => ` 0px 0px 5px ${theme.colors.lightestGrey2}`};
    outline: none;
  }
  transition: all 0.1s linear;
`;
