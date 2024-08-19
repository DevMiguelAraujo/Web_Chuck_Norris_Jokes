import React, { useState } from "react";
import { ArrowSVG } from "../assets/index";
type AccordionProps = React.ComponentProps<"ul"> & {
  title: string;
  list: string[];
  keyProp: string;
};

function Accordion({ title, list, keyProp }: AccordionProps) {
  const [visible, setVisible] = useState(true);
  const variantStyles = {
    open: "max-h-fit",
    closed: "max-h-0",
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2
          className="title border-b-2 border-solid border-amber-500 cursor-pointer"
          onClick={() => setVisible(!visible)}
        >
          {title}
        </h2>
        <div
          className={`min-w-7 transition-all duration-300 ${
            visible ? "rotate-180" : "rotate-0"
          }`}
        >
          <ArrowSVG
            className="cursor-pointer"
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <ul
        className={`${
          visible ? variantStyles.open : variantStyles.closed
        } transition-all duration-300 px-2 flex flex-col gap-2 overflow-hidden text-start bg_main`}
      >
        {list.map((item, index) => (
          <li className="font-semibold text-lg" key={`${keyProp}+${index}`}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Accordion;
