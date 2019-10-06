import React from "react";
import { TextButton } from "@jsluna/button";
import { Header, HeaderLogo, HeaderNav } from "@jsluna/header";
import { Account } from "@jsluna/icons";

import "./Header.scss";

export default () => (
  <Header>
    <HeaderLogo>
      Snowbot
      <span className="ln-u-visually-hidden">Snowbot logo</span>
    </HeaderLogo>
    <HeaderNav drawer="header" fullWidth>
      <a className="header-item__link" href="#book-collection">
        Home
      </a>
      <a className="header-item__link" href="#groceries">
        Jobs
      </a>
    </HeaderNav>
    <TextButton>
      <Account /> Andy Ballingall
      <span className="ln-u-visually-hidden">Account icon</span>
    </TextButton>
  </Header>
);
