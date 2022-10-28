import React from "react";
import { Logo } from "../logo/logo";
import { Header } from "./header";

export const Standard = (props) => (
  <Header
    links={[
      {
        href: "/",
        title: "Home",
        side: "left",
      },
      {
        href: "/",
        title: "Schedule",
        side: "right",
      },
    ]}
    logo={Logo}
    {...props}
  />
);

export default {
  title: "Header",
  component: Standard,
  argTypes: {
    backgroundColor: {
      control: {
        type: "radio",
        options: [
          "white",
          "black",
          "orange",
          "keppel",
          "casablanca",
          "aquamarine",
          "pink",
          "purple",
          "transparent",
        ],
      },
    },
  },
};
