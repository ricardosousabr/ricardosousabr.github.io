import React, { ReactNode } from "react";

export interface ContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
