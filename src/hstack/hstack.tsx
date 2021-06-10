import clsx from "clsx";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  align?: "left" | "center" | "right";
};

export const HStack = ({ children, align }: Props) => (
  <div
    className={clsx("flex flex-row", {
      "items-start justify-items-start": align == "left",
      "items-center justify-items-center": align == "center",
      "items-end justify-items-end": align == "right",
    })}
  >
    {children}
  </div>
);
