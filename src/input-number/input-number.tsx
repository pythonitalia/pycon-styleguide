import clsx from "clsx";
import { Heading } from "../heading";
import { Text } from "../text";
import React, { useState } from "react";

type Props = {
  values: { value: number | string; label: string | React.ReactNode }[];
  value?: number | string | undefined;
  onClick?: (value: number | string) => void;
};

export const InputNumber = ({ values, value, onClick }: Props) => {
  const valuesById = Object.fromEntries(
    values.map((value) => [value.value, value.label])
  );

  const [display, setDisplay] = useState<number | string | null>(null);

  const handleOnClick = (newValue: number | string): (() => void) => {
    return () => {
      onClick && onClick(newValue);
    };
  };

  const handleOnMouseEnter = (newValue: number | string): (() => void) => {
    return () => {
      setDisplay(newValue);
    };
  };

  const handleOnMouseLeave = (newValue: number | string): (() => void) => {
    return () => {
      setDisplay(null);
    };
  };

  return (
    <div>
      <div className="flex flex-row gap-1 md:gap-6">
        {values.map((element) => (
          <div
            key={element.value}
            className={clsx(
              "flex items-center justify-center font-sans text-md  rounded-full border-3  hover:bg-green cursor-pointer border-black w-10 h-10 md:w-16 md:h-16  transition-colors outline-none  leading-3 ",
              {
                "bg-green": value === element.value,
                "bg-white": value !== element.value,
              }
            )}
            onClick={handleOnClick(element.value)}
            onMouseOver={handleOnMouseEnter(element.value)}
            onMouseLeave={handleOnMouseLeave(element.value)}
          >
            <Heading size={3}>{element.value}</Heading>
          </div>
        ))}
        {values.map((element) => (
          <div
            className={clsx("flex h-10 md:h-16", {
              hidden:
                (display !== element.value && value !== element.value) ||
                (value === element.value && display !== null),
            })}
          >
            <div className="flex items-center justify-center">
              <Text size="label2">{valuesById[element.value]}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
