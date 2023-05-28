import { useState } from "react";

import { Display } from "./Display";
import { RealTime } from "./RealTime";
import { Form } from "./Form";

export const Header = () => {
  const [counter, setCounter] = useState(0);

  const [textValue, setTextValue] = useState("");

  const [displayValue, setDisplayValue] = useState("");

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleChange = (event) => {
    console.log(event);
    setTextValue(event.target.value);
  };

  const onSubmitValue = (event) => {
    //remove the default refresher
    event.preventDefault();
    setDisplayValue(textValue);
  };

  return (
    <>
      <h1>Counter Application</h1>
      <h3>Initial Value: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCounter(counter + 2)}>PlusTwo</button>
      <button onClick={() => setCounter(0)}>Reset</button>

      <hr />
      <h1>Controlled Input Field</h1>
      {/* <form onSubmit={onSubmitValue}>
        <input type="text" value={textValue} onChange={handleChange} />
        <button type="submit">Submit</button>

        <h3>Real Time Typing {textValue}</h3>
        <h3>Text after Submit {displayValue}</h3>
      </form> */}

      <h1>Props and Components</h1>
      <Form
        value={textValue}
        onSubmitValue={onSubmitValue}
        handleChange={handleChange}
      />
      <RealTime value={textValue} />
      <Display value={displayValue} />
    </>
  );
};
