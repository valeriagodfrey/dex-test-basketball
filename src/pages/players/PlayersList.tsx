import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../core/redux/store";
import { getPlayers } from "../../modules/players/getPlayersThunk";
import { Button } from "../../ui/button/Button";
import { Card } from "../../ui/cards/Card";
import { SearchInput } from "../../ui/input/SearchInput";
import { Layout } from "../../ui/layout/Layout";

export const PlayersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  const { content, status } = useSelector((state: RootState) => state.getPlayers);
  return (
    <Layout type="players">
      <Row>
        <Box type="long">
          <SearchInput placeholder="Search..." />
        </Box>
        <Box type="short" onClick={() => navigate("/players/add")}>
          <Button buttonType="primary" svg="add">
            Add
          </Button>
        </Box>
      </Row>
      <TeamsContainer onClick={() => navigate("/players/add")}>
        {status === "loaded" && content?.count !== 0 ? (
          <List>
            {content?.data.map((item) => (
              <div>{item}</div>
            ))}
          </List>
        ) : content?.count === 0 ? (
          <Card type="players" />
        ) : (
          ""
        )}
      </TeamsContainer>
    </Layout>
  );
};

const TeamsContainer = styled.div``;
const List = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 139px;
`;
const Box = styled.div<{ type?: "short" | "long" }>`
  display: flex;
  min-width: ${({ type }) => (type === "short" ? `104px` : `364px`)};
`;
