import React from "react";
import { Body1 } from "@jsluna/typography";
import { Card } from "@jsluna/card";
import { Container } from "@jsluna/grid";
import { Section } from "@jsluna/section";

import "./Hero.scss";

export default () => (
  <Section>
    <Card className="ln-u-text-align-center">
      <Container size="xs">
        <h1 className="hero__title">Occasions made easy</h1>
        <Body1>
          Here you’ll find great Sainsbury’s products and selected items made to
          order. Whether you’re entertaining for a special occasion or just
          looking for something special, you’ll find it here.
        </Body1>
      </Container>
    </Card>
  </Section>
);
