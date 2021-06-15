import React from "react";

type Props = {
  placeholder?: string;
};

export const Input = ({ placeholder = "" }: Props) => (
  <input
    placeholder={placeholder}
    className="w-full p-2 border-4 border-black placeholder-tundora bg-aquamarine"
  />
);
