import React from "react";
import { SiteLayout } from "@jsluna/site-layout";
import Routes from "./routes";
import Logger from "./helpers/logger";

const App = () => {
  Logger.info("app");

  return (
    <SiteLayout>
      Site
      <Routes />
    </SiteLayout>
  );
};

export default App;
