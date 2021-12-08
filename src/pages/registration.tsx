import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import regImg from "../assets/icons/reg_img.svg";
import { Button } from "../ui/buttons/Button";
import { Input } from "../ui/input/Input";
import { CustomLink } from "../ui/link/CustomLink";
interface RegisterProps {
  name: string;
  login: string;
  password: string;
  passwordCheck: string;
}

export default function Registration() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterProps>();
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<RegisterProps> = (data: RegisterProps) => console.log(data);

  const password = getValues("password");
  const passwordCheck = getValues("passwordCheck");

  return (
    <WrapperContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Sign Up</Label>
          <InputContainer>
            <Input
              label="Name:"
              {...register("name", { required: true })}
              error={errors.name?.type === "required" ? "Please, enter your name." : ""}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              label="Login:"
              {...register("login", { required: true })}
              error={errors.login?.type === "required" ? "Please, enter your login." : ""}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              label="Password:"
              type="password"
              {...register("password", { required: true })}
              error={errors.password?.type === "required" ? "Please, enter your password." : ""}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              label="Enter your password again:"
              type="password"
              {...register("passwordCheck", { required: true })}
              error={
                password !== passwordCheck && passwordCheck !== ""
                  ? "Please, enter right password."
                  : errors.passwordCheck?.type === "required"
                  ? "Please, enter your password again"
                  : ""
              }
            ></Input>
          </InputContainer>
          <Button buttonType="primary">Sign Up</Button>
          <Caption>
            Already a member? <CustomLink to={"/authorization"}>Sign In</CustomLink>
          </Caption>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Img src={regImg} alt="basketball" />
      </ImageContainer>
    </WrapperContainer>
  );
}
const WrapperContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;
const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
  margin-top: 226px;
  width: 55%;
`;
const FormContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  width: 60%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;
const Img = styled.img`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 305px;
`;
const Label = styled.div`
  margin-bottom: 32px;
  font-size: 36px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.blue};
  margin-right: auto;
`;
const InputContainer = styled.div`
  margin-bottom: 24px;
`;
const Caption = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-top: 24px;
  text-align: center;
`;
