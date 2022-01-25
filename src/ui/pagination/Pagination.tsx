import React, { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import styled from "styled-components";

import { Chevron } from "../../assets/icons/Chevron";

export const Pagination: FC<
  Omit<ReactPaginateProps, "pageRangeDisplayed" | "marginPagesDisplayed">
> = (props) => {
  return (
    <Content>
      <ReactPaginate
        {...props}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousClassName="previous"
        nextClassName="next"
        previousLabel={<PreviousLabel />}
        nextLabel={<NextLabel />}
        pageClassName="page"
        breakClassName="break"
        breakLabel={<BreakLabel />}
        disableInitialCallback={true}
      />
    </Content>
  );
};

const PreviousLabel: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <PageButton style={{ transform: `rotate(180deg)` }} onClick={onClick}>
      <Chevron />
    </PageButton>
  );
};
const NextLabel: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <PageButton onClick={onClick}>
      <Chevron />
    </PageButton>
  );
};
const BreakLabel: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return <PageButton onClick={onClick}>...</PageButton>;
};
const Content = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  ul {
    padding-left: 0;
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;

    li.page,
    li.break {
      margin-right: 16px;
      height: 40px;
      min-width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      &:last-of-type {
        margin-right: 0;
      }
    }

    li.page a,
    li.break a {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      padding: 0 6px;
      color: ${({ theme }) => theme.colors.grey};
      cursor: pointer;
      border-radius: 4px;
    }
    li.break a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      height: 32px;
      min-width: 32px;
      color: ${({ theme }) => theme.colors.grey};
      cursor: pointer;
      border-radius: 4px;
    }
    li.previous {
      margin-right: 8px;
      border-radius: 4px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      cursor: pointer;

      &:not(.disabled):hover {
        transition: all 0.2s ease-in-out;
      }
    }

    li.next {
      border-radius: 4px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      cursor: pointer;

      &:not(.disabled):hover {
        transition: all 0.2s ease-in-out;
      }
    }

    li.selected.page {
      background-color: ${({ theme }) => theme.colors.red};
    }
    li.selected.page a {
      color: ${({ theme }) => theme.colors.white};
    }

    li.break a {
      cursor: default;
      background: none;

      &:hover {
        background: none;
        color: black;
      }
    }

    li.disabled {
      opacity: 0.5;

      a {
        cursor: default;
      }
    }
  }
`;

const PageButton = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
