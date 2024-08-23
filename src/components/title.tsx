import React from "react";

type TitleType = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => unknown;
};

function Title({ className, children, onClick }: TitleType) {
  return (
    <div
      className={
        "font-semibold text-2xl border-b-2 border-solid border-amber-500" + " " +
        className
      }
    >
      <h1 onClick={onClick}>{children}</h1>
    </div>
  );
} 
export default Title;
