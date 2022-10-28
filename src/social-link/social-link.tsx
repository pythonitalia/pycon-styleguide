import clsx from "clsx";
import React, { CSSProperties, ReactNode, SVGProps } from "react";

export const SocialLink = ({
  href,
  className,
  icon,
  children,
  style,
}: {
  className: string;
  href: string;
  children: ReactNode;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  style?: CSSProperties;
}) => {
  const IconComponent = icon;

  return (
    <a
      href={href}
      className={clsx(
        "w-10 h-10 rounded-full flex items-center justify-center text-white",
        className
      )}
      target="_blank"
      rel="noreferrer noopener"
      style={style}
    >
      <IconComponent className="fill-current" />{" "}
      <div className="sr-only">{children}</div>
    </a>
  );
};
