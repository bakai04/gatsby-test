import React from "react";
import "./src/shared/styles/global.css";
import "./src/shared/styles/variables.css";
import { Application } from './src/app';
import { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element
}) => (
  <Application>{element}</Application>
);
