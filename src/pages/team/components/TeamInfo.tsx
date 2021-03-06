import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { media } from "../../../assets/theme/media";
import { deleteTeam } from "../../../modules/teams/teamThunks";
import { Breadcrumbs } from "../../../ui/breadcrumbs/Breadcrumbs";

interface TeamInfoProps {
  id?: number;
  name?: string;
  foundationYear?: number;
  division?: string;
  conference?: string;
  imageUrl?: string;
}
export const TeamInfo = ({ ...rest }: TeamInfoProps) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const data = [
    { path: "/teams", name: "Teams" },
    { path: location.pathname, name: rest.name },
  ];
  return (
    <CardContainer>
      <Header>
        <Breadcrumbs data={data} />
        <Icons>
          <Link to={`/teams/${rest.id}/edit`}>
            <EditIcon />
          </Link>
          <Icon>
            <DeleteIcon
              onClick={() =>
                dispatch(
                  deleteTeam({
                    params: { id: rest.id },
                    onSuccess: () => {
                      navigate("/");
                    },
                  }),
                )
              }
            />
          </Icon>
        </Icons>
      </Header>
      <CardInfo>
        <Image src={rest.imageUrl} alt="logo" />
        <Info>
          <Name>{rest.name}</Name>
          <Wrapper>
            <Box>
              <Label>Year of foundation</Label>
              <Caption>{rest.foundationYear}</Caption>
            </Box>
            <Box>
              <Label>Division</Label>
              <Caption>{rest.division}</Caption>
            </Box>
          </Wrapper>
          <Box>
            <Label>Conference</Label>
            <Caption>{rest.conference}</Caption>
          </Box>
        </Info>
      </CardInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  ${media.desktop} {
    border-radius: 10px;
  }
`;

const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 48px;
  padding: 48px 0px;
  align-items: center;
  justify-items: center;
  width: 100%;
  background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
  border-radius: 0px 0px 10px 10px;
  ${media.desktop} {
    grid-template-columns: 280px 1fr;
    grid-column-gap: 110px;
    justify-items: flex-end;
    padding: 55px 0px;
  }
  ${media.extraLargeDesktop} {
    grid-template-columns: 356px 1fr;
    grid-column-gap: 146px;
    justify-items: flex-end;
    padding: 65px 0px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  ${media.desktop} {
    padding: 24px 32px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 90px;
  ${media.desktop} {
    width: 180px;
  }
  ${media.extraLargeDesktop} {
    width: 210px;
  }
`;
const Icon = styled.div`
  margin-left: 16px;
`;
const Info = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 48px;
  justify-items: center;

  ${media.desktop} {
    justify-items: normal;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 40px;

  ${media.extraLargeDesktop} {
    grid-template-columns: 225px 1fr;
    grid-column-gap: 84px;
  }
`;

const Box = styled.div`
  width: 100%;
  justify-items: center;
  display: grid;
  grid-row-gap: 6px;
  grid-template-columns: 1fr;

  ${media.desktop} {
    justify-items: flex-start;
  }
`;

const Label = styled.div`
  font-size: 17px;
  line-height: 25px;
  font-style: normal;
  font-weight: 800;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  ${media.desktop} {
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
  }
`;

const Name = styled.div`
  font-size: 17px;
  line-height: 25px;
  font-style: normal;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};

  ${media.desktop} {
    font-size: 36px;
    line-height: 49px;
  }
`;

const Caption = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  ${media.desktop} {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }
`;
