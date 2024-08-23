import React, { useState } from "react";
import { ArrowSVG } from "../assets/index";
import Title from "./title";
type AccordionProps = React.ComponentProps<"ul"> & {
  title: string;
  list: string[];
  keyProp: string;
};

function Accordion({ title, list, keyProp }: AccordionProps) {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div className="flex justify-between">
        <Title className="cursor-pointer" onClick={() => setVisible(!visible)}>
          {title}
        </Title>
        <div
          className={`min-w-7 transition-all duration-500 cursor-pointer
          ${visible ? "rotate-180" : "rotate-0"}`}
        >
          <ArrowSVG onClick={() => setVisible(!visible)} />
        </div>
      </div>
      <div
        className={`transition-all duration-500 text-start overflow-y-hidden bg-amber-200 
        ${visible ? "max-h-96" : "max-h-0"}`}
      >
        <ul
          className={`flex flex-col transition-all duration-500 p-2 sm:py-4 md:py-6 gap-6 sm:gap-8 md:gap-12`}
        >
          {list.map((item) => (
            <li className="font-semibold text-xl" key={`${keyProp}+${item}`}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Accordion;
