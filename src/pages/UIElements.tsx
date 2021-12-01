import React from "react";
import styled from "styled-components";

import { CustomButton } from "../ui/buttons/CustomButton";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { Input } from "../ui/input/Input";
import { SearchInput } from "../ui/input/SearchInput";
import { CustomLink } from "../ui/link/CustomLink";
import { Pagination } from "../ui/pagination/Pagination";
import { CustomSelect } from "../ui/select/CustomSelect";

export const UIElements = () => {
  return (
    <Container>
      <CustomLink to={"/players"}>Click here</CustomLink>
      <CustomLink disabled to={"/players"}>
        You can't click here
      </CustomLink>
      <Buttons>
        <CustomButton buttonType="primary">Hello world</CustomButton>
        <CustomButton buttonType="primary" disabled>
          Goodbye world
        </CustomButton>
        <CustomButton buttonType="primary" svg="add">
          Add
        </CustomButton>
        <CustomButton buttonType="secondary">Programmer</CustomButton>
        <CustomButton buttonType="secondary" disabled>
          Not a Programmer
        </CustomButton>
      </Buttons>
      <Inputs>
        <Input label="Login" />
        <Input type="password" label="Password" />
        <Input disabled label="Email" value="hey" />
        <Input error="Error" label="Age" />
        <SearchInput placeholder="Search..."></SearchInput>
      </Inputs>
      <Checkboxes>
        <Checkbox text="Check this" />
        <Checkbox text="Are u sure?" error="You should check!" />
        <Checkbox disabled text="Disabled" />
        <Checkbox disabled_check disabled text="You can not check this" />
      </Checkboxes>
      <CustomSelect options={["Orange", "Green"]} />
      <Pagination pageCount={12} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Buttons = styled.div`
  margin: 10px 0px 15px 0;
`;
const Inputs = styled.div``;
const Checkboxes = styled.div``;
