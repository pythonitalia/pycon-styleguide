import React from "react";

type Props = {
  children: React.ReactNode;
};

export const TicketHolder = ({ children }: Props) => {
  return (
    <div className="relative z-10 px-4 pt-20 pb-4 bg-white shadow-xl -mt-7 rounded-xl">
      {/* large */}
      <div className="absolute w-16 h-5 rounded-xl top-4 left-1/4 bg-orange"></div>

      {/* round one */}
      <div className="absolute w-5 h-5 transform -translate-x-1/2 rounded-full top-4 bg-orange left-1/2"></div>

      {/* large */}
      <div className="absolute w-16 h-5 rounded-xl top-4 right-1/4 bg-orange"></div>

      {children}
    </div>
  );
};