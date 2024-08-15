import React, { useState } from "react";

type AccordionProps = React.ComponentProps<"ul"> & {
  titulo: string;
  lista: string[];
  keyProp: string;
};

function Accordion({ titulo, lista, keyProp }: AccordionProps) {
  const [visible, setVisible] = useState(true);
  const variantStyles = {
    open: "max-h-fit bg-amber-200",
    closed: "max-h-0 overflow-hidden",
  };
  return (
    <div className="flex flex-col items-center text-start px-2">
      <div>
        <h2 className="text-lg font-semibold" onClick={() => setVisible(!visible)}>{titulo}</h2>
        <ul
          className={`${
            visible ? variantStyles.open : variantStyles.closed
          } transition-all duration-1000 px-2 py-2 flex flex-col gap-2`}
        >
          {lista.map((item, index) => (
            <li key={`${keyProp}+${index}`}>
              <p>
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Accordion;
