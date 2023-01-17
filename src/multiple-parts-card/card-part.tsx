import React from "react";
import { Text } from "../text";
import clsx from "clsx";
import { TicketsIcon } from "../icons/tickets";
import { TShirtIcon } from "../icons/tshirt";
import { HotelIcon } from "../icons/hotel";
import { StarIcon } from "../icons/star";
import { ArrowDownIcon } from "../icons/arrow-down";
import { useMultiPartsCardContext } from "./context";
import { FormattedMessage } from "react-intl";
import ArrowIcon from "../icons/arrow";
import { Color } from "../types";
import { getBackgroundClasses } from "../colors-utils";

type Icon = "ticket" | "tshirt" | "hotel" | "star" | "arrow";
type IconBackground = "green" | "pink" | "blue" | "yellow" | "none";
type IconSize = "small" | "large";

type CardPartProps = {
  children: React.ReactNode;
  background?: Color;
  contentAlign?: "right" | "left" | "center";
  size?: "none" | "small" | "large";
  icon?: Icon;
  iconBackground?: IconBackground;
  iconSize?: IconSize;
  rightSideIcon?: Icon;
  rightSideIconBackground?: IconBackground;
  rightSideIconSize?: IconSize;
  id?: string;
  openLabel?: string | React.ReactNode;
  closeLabel?: string | React.ReactNode;
  fullHeight?: boolean;
  shrink?: boolean;
};

export const CardPart = ({
  children,
  background = "cream",
  contentAlign = "center",
  size = "large",
  icon,
  iconBackground,
  iconSize = "large",
  rightSideIcon,
  rightSideIconBackground,
  rightSideIconSize = "large",
  id,
  openLabel,
  closeLabel,
  fullHeight = false,
  shrink = true,
}: CardPartProps) => {
  const { isClickablePart, isTargetPart, open, toggleOpen } =
    useMultiPartsCardContext();

  const isClickToExpandElement = isClickablePart(id);
  const canBeOpened = isTargetPart(id);

  const onToggleExpand = () => {
    if (isClickToExpandElement) {
      toggleOpen?.((expanded) => !expanded);
    }
  };

  const hasIcon = !!icon || !!rightSideIcon;

  return (
    <div
      className={clsx("overflow-hidden transition-all", {
        ...getBackgroundClasses(background),

        "text-right": contentAlign === "right",
        "text-left": contentAlign === "left",
        "text-center": contentAlign === "center",

        "py-4 lg:py-6": (!canBeOpened || open) && size === "large",
        "py-4": (!canBeOpened || open) && size === "small",

        "px-4 lg:px-6": size === "large",
        "px-4": size === "small",

        "h-0 py-0 -mb-0.6": canBeOpened && !open,

        "cursor-pointer": isClickToExpandElement,

        "h-full": fullHeight,
        "shrink-0": !shrink,
      })}
      onClick={onToggleExpand}
      data-expand-own-id={id}
    >
      <div
        className={clsx("flex", {
          "flex-col": !hasIcon,
          "flex-row": hasIcon,
        })}
      >
        {icon && (
          <Icon
            containerSize={size}
            size={iconSize}
            side="left"
            iconBackground={iconBackground}
            icon={icon}
          />
        )}
        <div
          className={clsx({
            "pl-4 ml-4 lg:ml-6 lg:pl-6": !!icon,
            "flex justify-center items-center": !!rightSideIcon,
            "flex justify-between items-center w-full": isClickToExpandElement,
          })}
        >
          {children}

          {isClickToExpandElement && (
            <div className="flex items-center justify-center gap-4 select-none">
              {!open && (
                <Text className="hidden md:block" uppercase size="label3">
                  {openLabel || (
                    <FormattedMessage
                      defaultMessage="Open"
                      id="multiple-parts-card.openLabel"
                    />
                  )}
                </Text>
              )}

              {open && (
                <Text className="hidden md:block" uppercase size="label3">
                  {closeLabel || (
                    <FormattedMessage
                      defaultMessage="Close"
                      id="multiple-parts-card.closeLabel"
                    />
                  )}
                </Text>
              )}

              <ArrowDownIcon
                className={clsx("transition-transform", {
                  "rotate-0": !open,
                  "rotate-180": open,
                })}
              />
            </div>
          )}
        </div>
        {rightSideIcon && (
          <Icon
            containerSize={size}
            size={rightSideIconSize}
            side="right"
            iconBackground={rightSideIconBackground}
            icon={rightSideIcon}
          />
        )}
      </div>
    </div>
  );
};

const Icon = ({
  icon,
  iconBackground,
  side,
  size,
  containerSize,
}: {
  icon: Icon;
  iconBackground?: IconBackground;
  side: "left" | "right";
  size: IconSize;
  containerSize: "none" | "small" | "large";
}) => {
  let Component;
  switch (icon) {
    case "ticket":
      Component = TicketsIcon;
      break;
    case "tshirt":
      Component = TShirtIcon;
      break;
    case "hotel":
      Component = HotelIcon;
      break;
    case "star":
      Component = StarIcon;
      break;
    case "arrow":
      Component = ArrowIcon;
      break;
  }

  return (
    <div
      className={clsx("inline-flex items-center justify-center", {
        "border-r": side === "left",
        "ml-auto border-l": side === "right",

        "-m-4 lg:-m-6": side === "left" && containerSize === "large",
        "-m-4": side === "left" && containerSize === "small",

        "-mr-4 lg:-mr-6 -my-4 lg:-my-6":
          side === "right" && containerSize === "large",
        "-mr-4 -my-4": side === "right" && containerSize === "small",

        "p-4 lg:p-6": size === "large",
        "p-4": size === "small",

        "bg-green": iconBackground === "green",
        "bg-pink": iconBackground === "pink",
        "bg-blue": iconBackground === "blue",
        "bg-yellow": iconBackground === "yellow",
      })}
    >
      <div
        className={clsx({
          "w-8 h-8 lg:w-12 lg:h-12": size === "large",
          "w-8 h-8": size === "small",
        })}
      >
        <Component className="w-full h-full" />
      </div>
    </div>
  );
};
