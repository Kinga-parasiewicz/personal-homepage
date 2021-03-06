import React from "react";
import { Container } from "./Container";
import { ThemeSwitch } from "./../../common/ThemeSwitch/index";
import { MainHeader } from "./MainHeader/index";
import { Skills } from "./Skills/index";
import { skills, nextSkills } from "./skillsData";
import { Footer } from "./Footer/index";
import { Portfolio } from "./Portfolio";

export const Homepage = () => (
  <Container>
    <ThemeSwitch />
    <MainHeader />
    <Skills 
    title="My skillset includes ⚒" 
    skills={skills} />
    <Skills 
    title="Next to learn" 
    skills={nextSkills} />
    <Portfolio/>
    <Footer/>
  </Container>
);
