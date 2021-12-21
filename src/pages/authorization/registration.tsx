import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import regImg from "../../assets/icons/reg_img.svg";
import { fetchRegistration } from "../../modules/authorization/authorizationThunk";
import { Button } from "../../ui/buttons/Button";
import { Checkbox } from "../../ui/checkbox/Checkbox";
import { Input } from "../../ui/input/Input";
import { CustomLink } from "../../ui/link/CustomLink";
interface RegisterProps {
  userName: string;
  login: string;
  password: string;
  password2: string;
  check: boolean;
}

export default function Registration() {
  const dispatch = useDispatch();

  const {
    register,
    control,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterProps>();

  const onSubmit: SubmitHandler<RegisterProps> = (data: RegisterProps) =>
    dispatch(fetchRegistration(data));

  return (
    <WrapperContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Sign Up</Label>
          <Container>
            <Input
              label="Name:"
              {...register("userName", { required: true })}
              error={errors.userName?.type === "required" ? "Please, enter your name." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Login:"
              {...register("login", { required: true })}
              error={errors.login?.type === "required" ? "Please, enter your login." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Password:"
              type="password"
              {...register("password", {
                required: true,
              })}
              error={errors.password?.type === "required" ? "Please, enter your password." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Enter your password again:"
              type="password"
              {...register("password2", {
                required: true,
                validate: () => getValues("password2") === getValues("password"),
              })}
              error={
                errors.password2 && errors.password2.type === "validate"
                  ? "Please, enter right password."
                  : errors.password2?.type === "required"
                  ? "Please, enter your password again"
                  : ""
              }
            ></Input>
          </Container>

          <Controller
            name="check"
            control={control}
            render={(props) => (
              <Container>
                <Checkbox
                  {...register("check", { required: true })}
                  {...props}
                  checked={props.field.value}
                  onChange={(value) => {
                    value = !props.field.value;
                    props.field.onChange(value);
                  }}
                  error={errors.check?.type === "required" ? "Please, check this." : ""}
                  label="I accept the agreement"
                />
              </Container>
            )}
          />
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
  margin: 226px auto 220px;

  width: 58%;
`;
const FormContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  height: min-content;
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
  height: min-content;
`;
const Label = styled.div`
  margin-bottom: 32px;
  font-size: 36px;
  line-height: 49px;
  color: ${({ theme }) => theme.colors.blue};
  margin-right: auto;
`;
const Container = styled.div`
  margin-bottom: 24px;
`;
const Caption = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-top: 24px;
  text-align: center;
`;
