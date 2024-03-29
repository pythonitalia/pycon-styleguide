import clsx from "clsx";
import React from "react";
import { InputBar } from "./input-bar";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  errors?: (string | React.ReactNode)[];
  showErrorBar?: boolean;
};

export const Input = ({ errors, showErrorBar = true, ...props }: Props) => {
  const { value, maxLength } = props;
  const errorsOrEmpty = (errors ?? []).filter((e) => !!e);
  const hasError = errorsOrEmpty.length > 0;

  return (
    <div>
      <input
        {...props}
        className={clsx(
          "rounded-none w-full font-sans text-md bg-transparent placeholder:text-grey-250 placeholder:font-sans border-b border-black pb-2 transition-colors",
          "outline-none focus:border-purple font-medium leading-3",
          {
            "border-red": hasError,
            "border-black": !hasError,
          },
          props.className
        )}
      />
      {showErrorBar && (
        <InputBar errors={errorsOrEmpty} value={value} maxLength={maxLength} />
      )}
    </div>
  );
};
