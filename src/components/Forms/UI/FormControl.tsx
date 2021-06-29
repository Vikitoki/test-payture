import React from "react";
import { ReactNode } from "react";
import { FC } from "react";
import { Input } from "./Input";

interface FormControl {
  control: string;
  [key: string]: string;
}

export const FormControl: FC<FormControl> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};
