import React from "react";

import { Input } from "./input";

export default {
  title: "Input",
  argTypes: {
    placeholder: {
      defaultValue: "Placeholder",
      control: {
        type: "text",
      },
    },
  },
};

export const Primary = (props) => <Input {...props} />;
