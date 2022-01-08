import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MultiValue, SingleValue } from "react-select";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce/lib";

import { paginationOptions } from "../../core/constants/pagination";
import { RootState } from "../../core/redux/store";
import { media } from "../../core/theme/media";
import { getPlayers } from "../../modules/players/getPlayersThunk";
import { getTeamsOptionsSelector } from "../../modules/teams/getTeamsSelector";
import { getTeams } from "../../modules/teams/getTeamsThunk";
import { Button } from "../../ui/button/Button";
import { Card } from "../../ui/cards/Card";
import { SearchInput } from "../../ui/input/SearchInput";
import { Layout } from "../../ui/layout/Layout";
import { Pagination } from "../../ui/pagination/Pagination";
import { CustomSelect } from "../../ui/select/CustomSelect";
import { IOption } from "../../ui/select/data";
import { PlayerItem } from "./components/PlayerItem";

export const PlayersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { content, status } = useSelector((state: RootState) => state.getPlayers);

  const [page, setPage] = useState(1);
  const onPageChange = useCallback(({ selected }: { selected: number }) => {
    setPage(selected + 1);
  }, []);

  const [pageSize, setPageSize] = useState(6);
  const onSelectChange = useCallback((params: IOption) => {
    setPageSize(Number(params.value));
  }, []);

  const [name, setName] = useState("");
  const onChangeName: React.ChangeEventHandler<HTMLInputElement> = useDebouncedCallback((e) => {
    setName(e.target.value);
  }, 800);

  const [teamIds, setTeamIds] = useState<number[]>([]);
  const onChangeTeamIds = useDebouncedCallback(
    (value: MultiValue<IOption> | SingleValue<IOption>) => {
      setTeamIds((value as MultiValue<IOption>).map((i) => Number(i.value)));
    },
    800,
  );

  useEffect(() => {
    dispatch(getPlayers({ page, pageSize, name, teamIds }));
  }, [dispatch, name, page, pageSize, teamIds]);

  const pageCount = useMemo(
    () => Math.ceil((content?.count || 0) / pageSize),
    [content?.count, pageSize],
  );

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  const teams = useSelector(getTeamsOptionsSelector);

  return (
    <Layout type="players">
      <Row>
        <SearchInput placeholder="Search..." onChange={onChangeName} />
        <CustomSelect options={teams} isMulti onChange={onChangeTeamIds} />

        <ButtonContainer>
          <Button buttonType="primary" svg="add" onClick={() => navigate("/players/add")}>
            Add
          </Button>
        </ButtonContainer>
      </Row>

      {status === "loaded" && content?.count !== 0 ? (
        <PlayersContainer>
          <List>
            {content?.data.map((item) => (
              <PlayerItem data={item} key={item.id} />
            ))}
          </List>
        </PlayersContainer>
      ) : content?.count === 0 ? (
        <PlayersContainer empty>
          <Card type="players" onClick={() => navigate("/players/add")} />
        </PlayersContainer>
      ) : (
        ""
      )}

      <PaginationRow>
        <Pagination pageCount={pageCount} onPageChange={onPageChange} />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <CustomSelect
          options={paginationOptions}
          placement="top"
          onChange={onSelectChange as any}
          defaultValue={paginationOptions[0]}
        />
      </PaginationRow>
    </Layout>
  );
};

const PlayersContainer = styled.div<{ empty?: boolean }>`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: ${({ empty }) => (empty ? "flex" : "initial")};
  margin: ${({ empty }) => (empty ? "99px 0px 107px" : "0px")};
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  align-items: stretch;
  ${media.desktop} {
    grid-gap: 24px;
  }
  ${media.extraLargeDesktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Row = styled.div`
  width: 100%;
  align-items: flex-start;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  ${media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 40px;

    & > :first-child {
      max-width: 364px;
    }
  }
`;

const PaginationRow = styled.div`
  margin-top: 32px;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  ${media.desktop} {
    justify-self: flex-end;
  }
`;
