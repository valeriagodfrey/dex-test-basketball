import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IGetTeamResponse } from "../../api/dto/IGetTeams";
import { media } from "../../assets/theme/media";
import { saveImage } from "../../modules/saveImage/saveImageThunk";
import { addTeams } from "../../modules/teams/addTeamsThunk";
import { updateTeams } from "../../modules/teams/updateTeamsThunk";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { Button } from "../button/Button";
import { MyDropzone } from "../dropzone/Dropzone";
import { Input } from "../input/Input";

interface FormProps {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
}

interface IProps {
  data?: IGetTeamResponse;
  isEdit?: boolean;
}
export const TeamsForm = ({ data, isEdit }: IProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<FormProps>();

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  const action = isEdit ? updateTeams : addTeams;

  const onSubmit = (params: FormProps) =>
    dispatch(
      action({
        params,
        onSuccess: () => {
          navigate("/");
        },
      }),
    );
  const onChangeImage = useCallback(
    (file) => {
      dispatch(saveImage({ file, onSuccess: (imageUrl) => setValue("imageUrl", imageUrl) }));
    },
    [dispatch, setValue],
  );
  const location = useLocation();
  const paths = [
    { path: "/teams", name: "Teams" },
    { path: location.pathname, name: data ? data.name : "Add new team" },
  ];
  return (
    <FormContainer>
      <FormHeader>
        <Breadcrumbs data={paths} />
      </FormHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MyDropzone onChange={onChangeImage} defaultValue={data?.imageUrl} />
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
              <Button buttonType="primary">Save</Button>
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
    grid-column-gap: 110px;
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
