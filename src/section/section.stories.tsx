import React from "react";
import { ContainerSize } from "../container/container";
import { Heading } from "../heading";
import { Page } from "../page";
import { Color } from "../types";
import { Section } from "./section";

export const Standard = ({
  containerSize = "base",
  background,
}: {
  containerSize: ContainerSize;
  background: Color | "none";
}) => {
  return (
    <Section containerSize={containerSize} background={background}>
      <Heading size="display1">Section!</Heading>
    </Section>
  );
};

export const SectionInsidePage = ({
  containerSize = "base",
  background,
}: {
  containerSize: ContainerSize;
  background: Color | "none";
}) => {
  return (
    <Page>
      <Section containerSize={containerSize} background={background}>
        <Heading size="display1">Section!</Heading>
      </Section>
      <Section
        snakeDecoration="head"
        containerSize={containerSize}
        background={background}
      >
        <Heading size="display1">Section 2!</Heading>
      </Section>
      <Section
        snakeDecoration="tail"
        containerSize={containerSize}
        background={background}
      >
        <Heading size="display1">Section 3!</Heading>
      </Section>
    </Page>
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
    background: {
      defaultValue: "none",
      control: {
        type: "select",
        options: [
          "none",
          "coral",
          "caramel",
          "cream",
          "yellow",
          "green",
          "purple",
          "pink",
          "blue",
          "red",
          "success",
          "warning",
          "neutral",
          "black",
          "grey",
          "white",
          "milk",
        ],
      },
    },
  },
};
