import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "./Content";
import { Section, Header, StyledGithubIcon, MyRecentProjects } from "./styled";
import { StyledHeader } from "./../Skills/styled";
import { githubUserName } from "./githubUserName";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "./../../hompageSlice";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUserName));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <StyledHeader>Portflio</StyledHeader>
        <MyRecentProjects>My recent projects</MyRecentProjects>
      </Header>
      <Content status={repositoriesStatus} repositories={repositories} />
    </Section>
  );
};
