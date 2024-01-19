import React, { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  type?: "submit" | "reset" | "button";
}
