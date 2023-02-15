import React, { useState } from "react";
import { HeartIcon } from "./heart";

export default {
  title: "Icons",
  parameters: {
    layout: "centered",
  },
};

export const Primary = () => {
  const [fill, setToggleFill] = useState(false);
  return (
    <div>
      <HeartIcon fill={fill} onClick={() => setToggleFill((value) => !value)} />
    </div>
  );
};
