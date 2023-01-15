import clsx from "clsx";
import React from "react";
import { getBackgroundClasses } from "../colors-utils";
import { Container } from "../container";
import { ContainerSize } from "../container/container";
import { SnakeHead } from "../illustrations/snake-head";
import { SnakeTail } from "../illustrations/snake-tail";
import { Grid, GridColumn } from "../grid";
import { Spacer } from "../spacer";
import { Color } from "../types";

type Props = {
  children: React.ReactNode;
  noContainer?: boolean;
  containerSize?: ContainerSize;
  illustration?: "snakeHead" | "snakeTail";
  background?: Color | "none";
  spacingSize?: "xl" | "2xl" | "3xl";
};

export const Section = ({
  children,
  noContainer = false,
  illustration,
  containerSize = "base",
  background = "none",
  spacingSize = "2xl",
}: Props) => {
  const Wrapper = noContainer ? "div" : Container;
  const wrapperProps = noContainer ? {} : { size: containerSize };
  const hasIllustration = typeof illustration !== "undefined";

  const contentCols = hasIllustration ? 10 : 12;
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
        <Grid cols={12} mdCols={12}>
          {illustration === "snakeTail" && (
            <GridColumn className="hidden md:block" colSpan={2} mdColSpan={2}>
              <SnakeTail className="w-16 lg:w-auto" />
            </GridColumn>
          )}

          <GridColumn colSpan={contentCols} mdColSpan={contentCols}>
            <Spacer size={spacingSize} />
            {children}
            <Spacer size={spacingSize} />
          </GridColumn>

          {illustration === "snakeHead" && (
            <GridColumn
              colSpan={2}
              mdColSpan={2}
              className="mt-auto hidden md:block"
            >
              <SnakeHead className="hidden w-full lg:block" />
              <SnakeTail className="ml-auto w-16 lg:w-full rotate-180 lg:hidden" />
            </GridColumn>
          )}
        </Grid>
      </Wrapper>
    </div>
  );
};
