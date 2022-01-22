import styled from "styled-components";

import { IPlayer } from "../../../../api/dto/IGetPlayers";
import { calculateAge } from "../../../../core/helpers/calculateAge";

interface IProps {
  data?: Partial<IPlayer>;
}
export const RosterRow = ({ data }: IProps) => {
  return (
    <Container>
      <Cell>{data?.number}</Cell>
      <Cell>
        <Avatar src={data?.avatarUrl} />
        <InfoColumn>
          <Name>{data?.name}</Name>
          <Position>{data?.position}</Position>
        </InfoColumn>
      </Cell>
      <Cell>{data?.height ? `${data?.height} cm` : "-"}</Cell>
      <Cell>{data?.weight ? `${data?.weight} kg` : "-"}</Cell>
      <Cell>{data?.birthday ? calculateAge(data?.birthday) : "-"}</Cell>
    </Container>
  );
};

const Container = styled.div`
  display: contents;
`;

const Cell = styled.div`
  padding: 6px 32px;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.grey};
`;

const Avatar = styled.img`
  width: 52px;
  height: 38px;
`;

const InfoColumn = styled.div`
  margin-left: 10px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.grey};
`;

const Position = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
