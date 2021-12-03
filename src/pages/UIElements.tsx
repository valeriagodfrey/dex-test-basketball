import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../ui/buttons/Button";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { Input } from "../ui/input/Input";
import { SearchInput } from "../ui/input/SearchInput";
import { CustomLink } from "../ui/link/CustomLink";
import { Pagination } from "../ui/pagination/Pagination";
import { CustomSelect } from "../ui/select/CustomSelect";
import { IOptions } from "../ui/select/data";
import { Multiselect } from "../ui/select/Multiselect";

export const UIElements = () => {
  const [check, setCheck] = useState(false);

  return (
    <Container>
      <CustomLink to={"/players"}>Click here</CustomLink>
      <CustomLink disabled to={"/players"}>
        You can't click here
      </CustomLink>
      <Selects>
        <CustomSelect options={IOptions} />
        <Multiselect options={IOptions} />
      </Selects>
      <Buttons>
        <Button buttonType="primary">Hello world</Button>
        <Button buttonType="primary" disabled>
          Goodbye world
        </Button>
        <Button buttonType="primary" svg="add">
          Add
        </Button>
        <Button buttonType="secondary">Programmer</Button>
        <Button buttonType="secondary" disabled>
          Not a Programmer
        </Button>
      </Buttons>
      <Inputs>
        <Input label="Login" />
        <Input type="password" label="Password" />
        <Input disabled label="Email" value="hey" />
        <Input error="Error" label="Age" />
        <SearchInput placeholder="Search..."></SearchInput>
      </Inputs>
      <Checkboxes>
        <Checkbox onChange={() => setCheck((s) => !s)} checked={check} label="Check this" />
        <Checkbox
          onChange={() => setCheck((s) => !s)}
          checked={check}
          label="Are u sure?"
          error="You should check!"
        />
        <Checkbox onChange={setCheck} disabled label="Disabled" />
        <Checkbox onChange={setCheck} checked disabled label="You can not check this" />
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
const Selects = styled.div`
  margin-top: 15px;
  display: flex;
`;
