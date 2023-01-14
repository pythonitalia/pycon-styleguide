import clsx from "clsx";
import React from "react";
import { getBackgroundClasses } from "../colors-utils";
import { Container } from "../container";
import { ContainerSize } from "../container/container";
import { SnakeHead } from "../illustrations/snake-head";
import { SnakeTail } from "../illustrations/snake-tail";
import { Spacer } from "../spacer";
import { Color } from "../types";

type Props = {
  children: React.ReactNode;
  noContainer?: boolean;
  containerSize?: ContainerSize;
  snakeDecoration?: "head" | "tail";
  background?: Color | "none";
  spacingSize?: "xl" | "2xl" | "3xl";
};

export const Section = ({
  children,
  noContainer = false,
  snakeDecoration,
  containerSize = "base",
  background = "none",
  spacingSize = "2xl",
}: Props) => {
  const Wrapper = noContainer ? "div" : Container;
  const wrapperProps = noContainer ? {} : { size: containerSize };
  return (
    <div
      className={clsx({
        ...getBackgroundClasses(background),

        /* this is an hack until we add tailwind to pycon :) */
        "relative ml-auto w-32 lg:w-52 mr-6 md:mr-12 -mt-36 md:-mt-24 lg:-mt-44 hidden md:block":
          false,
      })}
    >
      <Wrapper className="relative" {...wrapperProps}>
        <Spacer size={spacingSize} />
        {children}
        {snakeDecoration === "head" && (
          <div className="absolute right-4 bottom-0 -z-1">
            <SnakeHead className="hidden lg:block" />
            <SnakeTail className="w-16 rotate-180 lg:hidden" />
          </div>
        )}
        {snakeDecoration === "tail" && (
          <div className="absolute left-4 top-0 -z-1">
            <SnakeTail className="hidden lg:block" />
          </div>
        )}
        <Spacer size={spacingSize} />
      </Wrapper>
    </div>
  );
};
