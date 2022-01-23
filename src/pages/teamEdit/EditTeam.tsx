import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "../../core/redux/store";
import { getTeam } from "../../modules/teams/getTeamThunk";
import { TeamsForm } from "../../ui/form/TeamsForm";
import { Layout } from "../../ui/layout/Layout";

export const EditTeam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { content, status } = useSelector((state: RootState) => state.getTeam);

  useEffect(() => {
    dispatch(getTeam({ id: Number(id) }));
  }, [dispatch, id]);

  return (
    <Layout>{status === "loaded" ? <TeamsForm data={content} isEdit /> : "Loading..."}</Layout>
  );
};
