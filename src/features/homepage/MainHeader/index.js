import kingaParasiewiczProfile from "./kingapParasiewiczProfile.jpg";
import { email } from "./../email";
import {
  Wrapper,
  Images,
  Iam,
  Name,
  Description,
  Summary,
  ButtonIcon,
  StyledButton,
} from "./styled";

export const MainHeader = () => (
  <Wrapper>
    <Images src={kingaParasiewiczProfile} alt="Kinga Parasiewicz" />
    <Description>
      <Iam>I'm</Iam>
      <Name>Kinga Parasiewicz</Name>
      <Summary>
        {" "}
        I'm passionate about JavaScript and React and new technology, ready for
        my Junior Front End Developer role. I study Cloud Solution Architect.
      </Summary>
      <StyledButton href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButton>
    </Description>
  </Wrapper>
);
