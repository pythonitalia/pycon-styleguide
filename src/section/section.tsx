import clsx from "clsx";
import React from "react";
import { getBackgroundClasses } from "../colors-utils";
import { Container } from "../container";
import { ContainerSize } from "../container/container";
import { SnakeTail } from "../illustrations/snake-tail";
import { Grid, GridColumn } from "../grid";
import { Spacer } from "../spacer";
import { Color } from "../types";
import { Illustration } from "../illustrations/types";
import { getIllustration } from "../illustrations/illustrations";

const NO_MOBILE_ILLUSTRATIONS: Illustration[] = ["snakeLongNeck", "snakeHead"];

const getClasses = (illustration: Illustration) => {
  if (illustration === "snakeHead") {
    return "max-w-[90px] lg:max-w-[190px]";
  }

  if (illustration === "snakeTailUp") {
    return "max-h-[140px] lg:max-h-[340px] max-w-[70px] lg:max-w-[140px]";
  }

  return "max-w-md max-h-[340px]";
};

const SideIllustration = ({
  illustration,
  cols,
  mdCols,
}: {
  illustration?: Illustration;
  cols: number;
  mdCols: number;
}) => {
  if (!illustration) {
    return null;
  }

  const Component = getIllustration(illustration);

  if (!Component) {
    return null;
  }

  const classes = getClasses(illustration);

  return (
    <GridColumn colSpan={cols} mdColSpan={mdCols} className="mt-auto block">
      <Component
        className={clsx(
          "w-full h-full block mx-auto md:mr-0",
          {
            "hidden md:block": NO_MOBILE_ILLUSTRATIONS.includes(illustration),
          },
          classes
        )}
      />
    </GridColumn>
  );
};

type Props = {
  children: React.ReactNode;
  noContainer?: boolean;
  containerSize?: ContainerSize;
  illustration?: Illustration;
  background?: Color | "none";
  spacingSize?: "none" | "xl" | "2xl" | "3xl";
};

const getCols = (illustration?: Illustration) => {
  if (!illustration) {
    return [12, 0];
  }

  if (illustration === "snakeLongNeck") {
    return [10, 2];
  }

  if (illustration === "snakeTail") {
    return [8, 0];
  }

  return [7, 5];
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

  const [contentCols, illustrationCols] = getCols(illustration);

  return (
    <div className={clsx(getBackgroundClasses(background))}>
      <Wrapper className="relative" {...wrapperProps}>
        <Grid
          cols={12}
          mdCols={12}
          smCols={illustration === "snakeTailUp" ? 0 : 1}
          className={clsx({
            "grid-cols-[1fr_70px]": illustration === "snakeTailUp",
          })}
        >
          {illustration === "snakeTail" && (
            <GridColumn className="hidden md:block" colSpan={2} mdColSpan={2}>
              <SnakeTail className="w-16 lg:w-[140px]" />
            </GridColumn>
          )}

          <GridColumn colSpan={contentCols} mdColSpan={contentCols}>
            <Spacer size={spacingSize} />
            {children}
            <Spacer size={spacingSize} />
          </GridColumn>

          {illustration !== "snakeTail" && (
            <SideIllustration
              cols={illustrationCols}
              mdCols={illustrationCols}
              illustration={illustration}
            />
          )}
        </Grid>
      </Wrapper>
    </div>
  );
};
