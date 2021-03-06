import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export type Crumb = {
  path: string;
  name?: string;
};
interface Props {
  data: Crumb[];
}
export const Breadcrumbs = ({ data }: Props) => {
  return (
    <Container>
      {data.map(({ name, path }, key) =>
        key + 1 === data.length ? (
          <span key={key}>{name}</span>
        ) : (
          <Fragment key={key}>
            <ILink to={path}>{name}</ILink>
            <span> / </span>
          </Fragment>
        ),
      )}
    </Container>
  );
};
const Container = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 500;
`;
const ILink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.red};
  font-weight: 500;
`;
