import React from "react";
import { Container } from "@jsluna/grid";

import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HeroImg from "./HeroImg";

function Site() {
  return (
    <div>
      <Header />
      <HeroImg />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </div>
  );
}

export default Site;
