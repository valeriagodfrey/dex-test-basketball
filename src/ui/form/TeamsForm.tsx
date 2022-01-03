import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { media } from "../../core/theme/media";
import { addTeams } from "../../modules/teams/addTeamsThunk";
import { Button } from "../button/Button";
import { MyDropzone } from "../dropzone/Dropzone";
import { Input } from "../input/Input";

interface TeamsProps {
  name: string;
  foundationYear: 0;
  division: string;
  conference: string;
  imageUrl: string;
  id: 0;
}
export const TeamsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TeamsProps>();

  const onSubmit: SubmitHandler<TeamsProps> = (data: TeamsProps) => dispatch(addTeams(data));
  return (
    <FormContainer>
      <FormHeader>
        <Label>Teams/Add new team</Label>
      </FormHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MyDropzone />
        <Information>
          <Container>
            <Input
              label="Name"
              {...register("name", { required: true })}
              error={errors.name?.type === "required" ? "Please, enter a team name." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Division"
              {...register("division", { required: true })}
              error={errors.division?.type === "required" ? "Please, enter a division name." : ""}
            ></Input>
          </Container>
          <Container>
            <Input
              label="Conference"
              {...register("conference", { required: true })}
              error={
                errors.conference?.type === "required" ? "Please, enter a conference name." : ""
              }
            ></Input>
          </Container>
          <Container>
            <Input
              label="Year of foundation"
              type="number"
              {...register("foundationYear", { required: true })}
              error={
                errors.foundationYear?.type === "required"
                  ? "Please, enter a year of foundation."
                  : ""
              }
            ></Input>
          </Container>
          <Buttons>
            <Box>
              <Button buttonType="secondary" type="button" onClick={() => navigate("/")}>
                Cancel
              </Button>
            </Box>
            <Box>
              <Button buttonType="primary" onClick={() => navigate("/")}>
                Save
              </Button>
            </Box>
          </Buttons>
        </Information>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.desktop} {
    border-radius: 10px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  padding: 48px 24px;
  grid-row-gap: 48px;

  ${media.desktop} {
    grid-template-columns: 185px 1fr;
    grid-column-gap: 80px;
    padding: 48px;
  }

  ${media.largeDesktop} {
    grid-template-columns: 336px 1fr;
    grid-column-gap: 136px;
    padding: 48px 73px;
  }
`;

const FormHeader = styled.div`
  display: flex;

  padding: 16px;
  ${media.desktop} {
    padding: 24px 32px;
  }
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const Box = styled.div`
  width: 45%;
`;

const Container = styled.div`
  margin-bottom: 24px;
`;

const Information = styled.div`
  width: 100%;
  ${media.desktop} {
    max-width: 366px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
