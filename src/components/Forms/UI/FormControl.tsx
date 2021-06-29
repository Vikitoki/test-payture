import React from "react";
import { FC } from "react";
import { Input } from "./Input";

interface FormControlProps {
  control: string;
  [key: string]: string;
}

export const FormControl: FC<FormControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};
