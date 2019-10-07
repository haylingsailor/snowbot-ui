import React from "react";
import { Container } from "@jsluna/grid";

import Footer from "./Footer";
import Header from "./Header";
import HeroImg from "./HeroImg";

import { AppRoutes } from "../../routes";

function Site() {
  return (
    <div>
      <Header />
      <HeroImg />
      <Container>
        <AppRoutes />
      </Container>
      <Footer />
    </div>
  );
}

export default Site;
