import { Color } from "./types";

export const getBackgroundClasses = (background: Color | "none") => {
  return {
    "bg-coral": background === "coral",
    "bg-caramel": background === "caramel",
    "bg-cream": background === "cream",
    "bg-yellow": background === "yellow",
    "bg-green": background === "green",
    "bg-purple": background === "purple",
    "bg-pink": background === "pink",
    "bg-blue": background === "blue",
    "bg-red": background === "red",
    "bg-success": background === "success",
    "bg-warning": background === "warning",
    "bg-neutral": background === "neutral",
    "bg-error": background === "error",
    "bg-black": background === "black",
    "bg-grey": background === "grey",
    "bg-grey-900": background === "grey-900",
    "bg-grey-700": background === "grey-700",
    "bg-grey-500": background === "grey-500",
    "bg-grey-250": background === "grey-250",
    "bg-grey-100": background === "grey-100",
    "bg-grey-50": background === "grey-50",
    "bg-white": background === "white",
    "bg-milk": background === "milk",
  };
};

export const getTextColorClasses = (color: Color | "none" | "default") => {
  return {
    "text-black": color === "default" || color === "black",
    "text-coral": color === "coral",
    "text-caramel": color === "caramel",
    "text-cream": color === "cream",
    "text-yellow": color === "yellow",
    "text-green": color === "green",
    "text-purple": color === "purple",
    "text-pink": color === "pink",
    "text-blue": color === "blue",
    "text-red": color === "red" || color === "error",
    "text-success": color === "success",
    "text-warning": color === "warning",
    "text-neutral": color === "neutral",
    "text-white": color === "white",
    "text-milk": color === "milk",
    "text-grey-900": color === "grey-900",
    "text-grey-700": color === "grey-700",
    "text-grey-500": color === "grey-500",
    "text-grey-250": color === "grey-250",
    "text-grey-100": color === "grey-100",
    "text-grey-50": color === "grey-50",
  };
};