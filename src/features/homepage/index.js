import React from "react";
import { Container } from "./Container";
import { ThemeSwitch } from "./../../common/ThemeSwitch/index";
import { MainHeader } from "./MainHeader/index";


export const Homepage = () => (
<Container>
   <ThemeSwitch/>
   <MainHeader/>
</Container>
);
