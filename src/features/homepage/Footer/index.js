import { email } from "../email";
import talkIcon from "./talk.svg";
import {
  Address,
  LetsTalk,
  EmailWrapper,
  EmailLink,
  Paragraph,
  Wrapper,
  StyledIcon,
} from "./styled";
import { SocialIcons } from "./SocialIcons/index";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>
      Let's talk!
      <StyledIcon src={talkIcon} />
    </LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        Thank you for viewing my personal homepage portflio. I'm very excited to
        talk about new opportunities ahead.
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
