import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  component: Button,
  title: "Ejemplo/ButtonDos",
};

export const Primary = () => (
  <Button buttonType="primary" onClick={action("click")}>
    Mio Primario
  </Button>
);

export const Secundary = () => (
  <Button buttonType="secondary" onClick={action("click")}>
    Mio Secundario
  </Button>
);
