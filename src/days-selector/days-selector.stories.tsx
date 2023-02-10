import React from "react";
import { DaysSelector } from "./days-selector";

export default {
  title: "Days Selector",
};

export const Primary = () => {
  return (
    <DaysSelector
      days={[
        { date: "2023-05-25", selected: true },
        { date: "2023-05-26", selected: false },
        { date: "2023-05-27", selected: false },
        { date: "2023-05-28", selected: false },
      ]}
    />
  );
};
