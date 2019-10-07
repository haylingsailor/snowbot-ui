import React from "react";
import { Route } from "react-router-dom";

import Home from "./modules/Home";
import Jobs from "./modules/Jobs";
import JobDetail from "./modules/Jobs/Detail";

const routes = [
  {
    path: "/home",
    component: Home,
    title: "Home"
  },
  {
    path: "/jobs",
    component: Jobs,
    title: "Jobs",
    routes: [
      {
        path: "/jobs/:jobID",
        component: JobDetail
      }
    ]
  }
];

const MakeRouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

export const AppRoutes = () =>
  routes.map((route, index) => (
    <MakeRouteWithSubRoutes key={index} {...route} />
  ));

export default routes;
