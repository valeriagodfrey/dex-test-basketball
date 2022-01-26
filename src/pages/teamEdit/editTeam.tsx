import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getTeam } from "../../modules/teams/getTeamThunk";
import { TeamsForm } from "../../ui/form/TeamsForm";
import { Layout } from "../../ui/layout/Layout";
import { teamSelector } from "../team/Team";

export const EditTeam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { content, status } = useSelector(teamSelector);

  useEffect(() => {
    dispatch(getTeam({ id: Number(id) }));
  }, [dispatch, id]);

  return (
    <Layout>{status === "loaded" ? <TeamsForm data={content} isEdit /> : "Loading..."}</Layout>
  );
};
