import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { Button } from "../ui/buttons/Button";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { Input } from "../ui/input/Input";
import { SearchInput } from "../ui/input/SearchInput";
import { CustomLink } from "../ui/link/CustomLink";
import { Pagination } from "../ui/pagination/Pagination";
import { IOptions } from "../ui/select/data";
import { Multiselect } from "../ui/select/Multiselect";
export const notify = () => toast.success("Hello");
export const UIElements = () => {
  const [check, setCheck] = useState(false);

  return (
    <Container>
      <div onClick={notify}>Hello</div>
      <Button
        buttonType="primary"
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        Sign out
      </Button>
      <b>Демонстрация UI-elements</b>
      <Links>
        <b>Link</b>
        <CustomLink to={"/authorization"}>Click here</CustomLink>
        <CustomLink disabled to={"/authorization"}>
          You can't click here
        </CustomLink>
      </Links>
      <b>Select and multiselect</b>
      <Selects>
        <Multiselect options={IOptions} />
        <Multiselect isMulti={true} options={IOptions} />
      </Selects>
      <b>Buttons</b>
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
      <b>Inputs</b>
      <Inputs>
        <Input label="Login" />
        <Input type="password" label="Password" />
        <Input disabled label="Email" value="hey" />
        <Input error="Error" label="Age" />
        <SearchInput placeholder="Search..."></SearchInput>
      </Inputs>
      <b>Checkbox</b>
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
      <b>Pagination</b>
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
const Inputs = styled.div`
  margin: 0 0 10px 0;
`;
const Checkboxes = styled.div`
  margin: 10px;
`;
const Selects = styled.div`
  margin: 10px 0;
  display: flex;
`;
const Links = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
