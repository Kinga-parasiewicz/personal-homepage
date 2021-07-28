import blueDot from "./dot.png";
import { Section, StyledHeader, List, Item, Dot } from "./styled"; 

export const Skills = ({ title, skills }) => (
  <Section>
    <StyledHeader>{title}</StyledHeader>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          <Dot src={blueDot} />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);