import React from "react";
import styled from "styled-components";

import { PrimaryButton } from "../ui/buttons/PrimaryButton";
import { SecondaryButton } from "../ui/buttons/SecondaryButton";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { Input } from "../ui/input/Input";
import { SearchInput } from "../ui/input/SearchInput";
import { Pagination } from "../ui/Pagination";

export const UIElements = () => {
  return (
    <Container>
      <Buttons>
        <PrimaryButton>Hello world</PrimaryButton>
        <PrimaryButton buttonType="disabled">Goodbye world</PrimaryButton>
        <SecondaryButton>Programmer</SecondaryButton>
        <SecondaryButton buttonType="disabled">Not a Programmer</SecondaryButton>
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
  display: flex;
  margin: 10px 0px 15px 0;
`;
const Inputs = styled.div``;
const Checkboxes = styled.div``;
