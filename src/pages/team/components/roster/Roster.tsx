import styled from "styled-components";

import { media } from "../../../../core/theme/media";
import { RosterRow } from "./PlayerRow";

export const Roster = () => {
  return (
    <PlayersContainer>
      <ListHeader>Roster</ListHeader>

      <Grid>
        <Row>
          <HeaderCell>#</HeaderCell>
          <HeaderCell>Player</HeaderCell>
          <HeaderCell>Height</HeaderCell>
          <HeaderCell>Weight</HeaderCell>
          <HeaderCell>Age</HeaderCell>
        </Row>

        <RosterRow
          data={{
            number: 2,
            name: "John",
            position: "Forward",
            height: 196,
            weight: 87,
            birthday: "1999-12-26T02:16:52.490Z",
          }}
        />
      </Grid>
    </PlayersContainer>
  );
};

const PlayersContainer = styled.div`
  margin-top: 24px;
  border-radius: 10px;
  border: ${({ theme }) => `0.5px solid ${theme.colors.lightGrey}`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const ListHeader = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  border-bottom: ${({ theme }) => `0.5px solid ${theme.colors.lightGrey}`};
  color: ${({ theme }) => theme.colors.grey};
  padding: 14px 32px;
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  ${media.desktop} {
    grid-template-columns: auto 1fr auto auto auto;
  }
`;

const Row = styled.div`
  display: contents;
`;

const HeaderCell = styled.div`
  padding: 10px 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grey};
`;
