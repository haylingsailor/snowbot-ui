import React from "react";

import { Card } from "@jsluna/card";
import { AwardWinning } from "@jsluna/icons";

const Home = () => (
  <Card padded>
    <h1>
      You win! <AwardWinning />
    </h1>
    <p>Congratulations, it looks like this is actually working</p>
  </Card>
);

export default Home;
