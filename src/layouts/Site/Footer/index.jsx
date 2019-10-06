import React from "react";
import { Container } from "@jsluna/grid";
import { Footer } from "@jsluna/footer";

export default () => (
  <Footer className="ln-u-caption">
    <Container>
      <div className="ln-u-font-weight-bold">
        Sainsbury&rsquo;s, Live Well For Less
      </div>
      &copy; J Sainsbury plc {new Date().getFullYear()}
    </Container>
  </Footer>
);
