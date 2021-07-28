import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";

export const socialWebSites = [
  {
    name: "Github",
    url: "https://github.com/Kinga-parasiewicz",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/kinga-parasiewicz-b6a3011b2/",
    Icon: styleIcon(LinkedinIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/parasiewicz/",
    Icon: styleIcon(FacebookIcon),
  },
];
