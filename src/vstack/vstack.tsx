import clsx from "clsx";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  align?: "left" | "center" | "right";
};

export const VStack = ({ children, align }: Props) => (
  <div
    className={clsx("flex flex-col", {
      "items-start justify-content-start": align == "left",
      "items-center justify-content-center": align == "center",
      "items-end justify-content-end": align == "right",
    })}
  >
    {children}
  </div>
);
