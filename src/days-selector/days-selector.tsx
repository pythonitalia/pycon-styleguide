import clsx from "clsx";
import React from "react";
import { Heading } from "../heading";
import { Container } from "../container";
import { Spacer } from "../spacer";
import { Text } from "../text";

type Day = {
  date: string;
  selected: boolean;
};

type Props = {
  days: Day[];
  language: string;
  onClick?: (date: string) => void;
  children?: React.ReactNode;
};

export const DaysSelector = ({ days, language, onClick, children }: Props) => {
  const numberAndDayFormatter = new Intl.DateTimeFormat(language, {
    day: "numeric",
    month: "long",
  });
  const weekDayFormatter = new Intl.DateTimeFormat(language, {
    weekday: "long",
  });

  return (
    <Container noPadding>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between md:pr-4">
        <div className="flex overflow-scroll snap-x snap-mandatory overflow-x-auto w-full">
          {days.map(({ date, selected }) => {
            const parsedDate = new Date(date);
            return (
              <div
                onClick={() => onClick?.(date)}
                key={date}
                className={clsx(
                  "basis-40 md:basis-[190px] cursor-pointer border shrink-0 text-center select-none snap-center",
                  "py-4 px-7 md:px-10 mx-2 first:ml-4 last:mr-4 hover:bg-coral transition",
                  {
                    "bg-milk/20 border-black/20": !selected,
                    "bg-coral border-black": selected,
                  }
                )}
              >
                <Heading size={3}>
                  {numberAndDayFormatter.format(parsedDate)}
                </Heading>
                <Spacer size="thin" />
                <Text
                  weight="strong"
                  size="label3"
                  color="black"
                  className="opacity-40"
                  uppercase
                >
                  {weekDayFormatter.format(parsedDate)}
                </Text>
              </div>
            );
          })}
        </div>
        <div className="shrink-0">{children}</div>
      </div>
    </Container>
  );
};
