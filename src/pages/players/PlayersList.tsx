import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce/lib";

import { paginationOptions } from "../../core/constants/pagination";
import { RootState } from "../../core/redux/store";
import { media } from "../../core/theme/media";
import { getPlayers } from "../../modules/players/getPlayersThunk";
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

  useEffect(() => {
    dispatch(getPlayers({ page, pageSize, name }));
  }, [dispatch, name, page, pageSize]);

  const pageCount = useMemo(
    () => Math.ceil((content?.count || 0) / pageSize),
    [content?.count, pageSize],
  );

  return (
    <Layout type="players">
      <Row>
        <SearchInput placeholder="Search..." onChange={onChangeName} />

        <Button buttonType="primary" svg="add" onClick={() => navigate("/players/add")}>
          Add
        </Button>
      </Row>

      {/* {status === "loaded" && content?.count !== 0 ? (
        <PlayersContainer>
          <List>
            {content?.data.map((item) => (
              <PlayerItem
                id={item.id}
                name={item.name}
                number={item.number}
                team={item.team}
                key={item.id}
              />
            ))}
          </List>
        </PlayersContainer>
      ) : content?.count === 0 ? (
        <PlayersContainer empty>
          <Card type="players" onClick={() => navigate("/players/add")} />
        </PlayersContainer>
      ) : (
        ""
      )} */}
      <PlayersContainer>
        <List>
          <PlayerItem name="Jonh" number={3} />
          <PlayerItem name="Jonh" number={3} />
          <PlayerItem name="Jonh" number={3} />
        </List>
      </PlayersContainer>

      <PaginationRow>
        <Pagination pageCount={pageCount} onPageChange={onPageChange} />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <CustomSelect
          options={paginationOptions}
          placement="top"
          onChange={onSelectChange as any}
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

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  ${media.desktop} {
    grid-template-columns: 1fr auto;
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
