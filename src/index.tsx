import React from "react";
import { createRoot } from "react-dom/client";
import { MainComponent } from "./components/main-component/mainComponent";
import logo from "./content/logo_lemoncode.png"
import classes from "./styles.scss"

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Evaluación módulo Bundling</h1>
    <div className={classes.container}>
      <MainComponent />
      <img src={logo} alt="Logo Lemoncode" />
    </div>
  </div>
);
