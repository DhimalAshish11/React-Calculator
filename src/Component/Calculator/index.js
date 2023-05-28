import { useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
  const buttons = [
    {
      className: "ac",
      label: "AC",
    },
    {
      className: "c",
      label: "←",
    },
    {
      className: "perc",
      label: "%",
    },
    {
      className: "divide",
      label: "/",
    },
    {
      className: "7",
      label: "7",
    },
    {
      className: "8",
      label: "8",
    },
    {
      className: "9",
      label: "9",
    },
    {
      className: "x",
      label: "*",
    },
    {
      className: "4",
      label: "4",
    },
    {
      className: "5",
      label: "5",
    },
    {
      className: "6",
      label: "6",
    },
    {
      className: "minus",
      label: "-",
    },
    {
      className: "1",
      label: "1",
    },
    {
      className: "2",
      label: "2",
    },
    {
      className: "3",
      label: "3",
    },
    {
      className: "plus",
      label: "+",
    },
    {
      className: "0",
      label: "0",
    },
    {
      className: "dot",
      label: ".",
    },
    {
      className: "equals",
      label: "=",
    },
  ];

  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const operators = ["+", "-", "/", "*", "="];

  const handleButtonClick = (val) => {
    if (val === "AC") {
      return setDisplayValue("");
    }

    if (val === "←") {
      return setDisplayValue((displayValue) => displayValue.slice(0, -1));
    }

    if (val === "=") {
      //removes equal sign
      /*  const lastCharacter = displayValue.slice(-1); */
      const lastCharacter = displayValue[displayValue.length - 1];
      let temStringValue = displayValue;

      if (operators.includes(lastCharacter)) {
        temStringValue = setDisplayValue(displayValue.slice(0, -1));
      }

      const total = eval(temStringValue);
      return setDisplayValue(total.toString());
      /* return displayTotal(stringToDisplay); */
    }

    if (operators.includes(val)) {
      ///if display scredn is empty this operator will not allow to enter operator
      if (!displayValue) {
        return;
      }
      let temStringValue = displayValue;
      const lastCharacter = displayValue[displayValue.length - 1];

      if (operators.includes(lastCharacter)) {
        temStringValue = displayValue.slice(0, -1);
      }

      setDisplayValue(temStringValue + val);
      setLastOperator(val);
      return;
    }

    setDisplayValue(displayValue + val);
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        {buttons.map((item, index) => (
          <Button
            key={index}
            className={item.className}
            label={item.label}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};
