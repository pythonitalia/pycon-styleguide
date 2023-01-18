import clsx from "clsx";
import { Heading } from "../heading";
import { Text } from "../text";
import React from "react";

type Props = {
  values: { value: number | string ; label: string | React.ReactNode }[];
  value?: number | string | undefined;
  onClick?: (value: number | string) => void;
};

export const InputNumber = ({ values, value, onClick }: Props) => {
  
  const valuesById = Object.fromEntries(
    values.map((value) => [value.value, value.label])
  );

  const handleOnClick = (newValue: number | string): () => void => {
    return () => {
      onClick && onClick(newValue);
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-1 md:gap-6">
        {values.map((element) => (
          <div
            key={element.value}
            className={clsx(
              "flex items-center justify-center font-sans text-md  rounded-full border-3 bg-white hover:bg-green cursor-pointer border-black w-10 h-10 md:w-16 md:h-16  transition-colors outline-none  leading-3 ",
              { "bg-green": value === element.value }
            )}
            onClick={handleOnClick(element.value)}
          >
            <Heading size={3}>{element.value}</Heading>
          </div>
        ))}
        <div className="flex h-10 md:h-16">
          <div className="flex items-center justify-center">
            <Text size="label2" >
              {value && valuesById[value]}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
