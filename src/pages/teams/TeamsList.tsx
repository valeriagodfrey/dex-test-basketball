import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce/lib";

import { paginationOptions } from "../../core/constants/pagination";
import { RootState } from "../../core/redux/store";
import { media } from "../../core/theme/media";
import { getTeams } from "../../modules/teams/getTeamsThunk";
import { Button } from "../../ui/button/Button";
import { Card } from "../../ui/cards/Card";
import { SearchInput } from "../../ui/input/SearchInput";
import { Layout } from "../../ui/layout/Layout";
import { Pagination } from "../../ui/pagination/Pagination";
import { CustomSelect } from "../../ui/select/CustomSelect";
import { IOption } from "../../ui/select/data";
import { TeamItem } from "./components/TeamItem";

export const TeamsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { content, status } = useSelector((state: RootState) => state.getTeams);

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
    dispatch(getTeams({ page, pageSize, name }));
  }, [dispatch, name, page, pageSize]);

  const pageCount = useMemo(
    () => Math.ceil((content?.count || 0) / pageSize),
    [content?.count, pageSize],
  );

  return (
    <Layout type="teams">
      <Row>
        <SearchInput placeholder="Search..." onChange={onChangeName} />
        <Button buttonType="primary" svg="add" onClick={() => navigate("/teams/add")}>
          Add
        </Button>
      </Row>
      {status === "loaded" ? (
        <TeamsContainer>
          <List>
            {content?.data.map((item) => (
              <TeamItem
                id={item.id}
                name={item.name}
                foundationYear={item.foundationYear}
                key={item.id}
              />
            ))}
          </List>
        </TeamsContainer>
      ) : content?.count === 0 ? (
        <TeamsContainer empty>
          <Card type="teams" onClick={() => navigate("/teams/add")} />
        </TeamsContainer>
      ) : (
        ""
      )}

      <PaginationRow>
        <Pagination pageCount={pageCount} onPageChange={onPageChange} />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <CustomSelect
          options={paginationOptions}
          placement="top"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={onSelectChange as any}
          defaultValue={paginationOptions[0]}
        />
      </PaginationRow>
    </Layout>
  );
};

const TeamsContainer = styled.div<{ empty?: boolean }>`
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
