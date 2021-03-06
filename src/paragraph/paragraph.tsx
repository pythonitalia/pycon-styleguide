import clsx from "clsx";
import React, { ReactNode } from "react";
import { Color } from "../types";

export const Paragraph = ({
  children,
  bold = false,
  color = "black",
}: {
  children: ReactNode;
  bold?: boolean;
  color?: Color;
}) => (
  <p
    className={clsx("mb-8", {
      "font-bold": bold,
      "text-aquamarine": color === "aquamarine",
      "text-casablanca": color === "casablanca",
      "text-black": color === "black",
      "text-orange": color === "orange",
      "text-keppel": color === "casablanca",
      "text-pink": color === "pink",
      "text-purple": color === "purple",
      "text-white": color === "white",
    })}
  >
    {children}
  </p>
);
