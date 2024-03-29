import clsx from "clsx";
import React, { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement> & {
  full?: boolean;
};

export const UserIcon = ({ full, ...props }: Props) => (
  <svg
    className={clsx({
      "w-6 h-6 lg:w-10 lg:h-10": !full,
      "h-full w-full": full,
    })}
    viewBox="0 0 40 42"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5004 11C12.5004 6.85786 15.8583 3.5 20.0004 3.5C24.1426 3.5 27.5004 6.85786 27.5004 11C27.5004 15.1421 24.1426 18.5 20.0004 18.5C15.8583 18.5 12.5004 15.1421 12.5004 11ZM20.0004 0.5C14.2014 0.5 9.50043 5.20101 9.50043 11C9.50043 16.799 14.2014 21.5 20.0004 21.5C25.7994 21.5 30.5004 16.799 30.5004 11C30.5004 5.20101 25.7994 0.5 20.0004 0.5ZM12.7837 28.8291C13.0678 28.4637 13.5048 28.25 13.9677 28.25H26.0332C26.4961 28.25 26.933 28.4637 27.2172 28.8291L36.8164 41.1709L39.1845 39.3291L29.5853 26.9873C28.7327 25.8911 27.4218 25.25 26.0332 25.25H13.9677C12.579 25.25 11.2682 25.8911 10.4156 26.9873L0.816406 39.3291L3.18446 41.1709L12.7837 28.8291Z"
      fill="#0E1116"
    />
  </svg>
);
