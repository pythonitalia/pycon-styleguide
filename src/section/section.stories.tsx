import React from "react";
import { ContainerSize } from "../container/container";
import { Heading } from "../heading";
import { Text } from "../text";
import { Section } from "./section";

export const Standard = ({
  containerSize = "base",
}: {
  containerSize: ContainerSize;
}) => {
  return (
    <Section containerSize={containerSize}>
      <Heading size={1}>Section!</Heading>
      <Text size={1}>Body Body Body Body Body Body Body Body</Text>
    </Section>
  );
};

export default {
  title: "Section",
  component: Standard,
  argTypes: {
    containerSize: {
      control: {
        type: "select",
        options: ["base", "medium"],
      },
      defaultValue: "base",
    },
  },
};
