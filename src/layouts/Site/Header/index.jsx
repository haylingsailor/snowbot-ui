import React from "react";
import { TextButton } from "@jsluna/button";
import { Header, HeaderLogo, HeaderNav } from "@jsluna/header";
import { Account } from "@jsluna/icons";
import { NavLink } from "react-router-dom";

import "./Header.scss";

export default () => (
  <Header>
    <HeaderLogo>
      Snowbot
      <span className="ln-u-visually-hidden">Snowbot logo</span>
    </HeaderLogo>
    <HeaderNav drawer="header" fullWidth>
      <NavLink className="header-item__link" to="/home">
        Home
      </NavLink>
      <NavLink className="header-item__link" to="/jobs">
        Jobs
      </NavLink>
    </HeaderNav>
    <TextButton>
      <Account /> Andy Ballingall
      <span className="ln-u-visually-hidden">Account icon</span>
    </TextButton>
  </Header>
);
