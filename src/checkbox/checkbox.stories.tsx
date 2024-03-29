import React, { useState } from "react";

import { Checkbox } from "./checkbox";

export default {
  title: "Checkbox",
  parameters: {
    layout: "centered",
  },
};

export const Primary = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      Large:
      <Checkbox
        checked={checked}
        size="large"
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      Small:
      <Checkbox
        size="small"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
    </div>
  );
};
