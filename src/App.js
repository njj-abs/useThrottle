/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from "react";
// import { useThrottle } from "react-use";
import { pretty } from "@laufire/utils/debug";
import useThrottle from "./useTrottle";

const Display = ({ value, onChange }) => {
  const [throttledValue] = useThrottle(value, 9000);

  return <button onClick={() => {}}>{throttledValue}</button>;
};

const App = () => {
  const [throttledValue, setState] = useThrottle("+", 200);
  const onChange = () => setState(throttledValue);

  return (
    <div className="App">
      <select
        name="pets"
        id="pet-select"
        onChange={(evt) => {
          // eslint-disable-next-line no-console
          console.log("Selected option:", evt.target.value);

          setState(evt.target.value);
        }}
      >
        <option value="+">Add</option>
        <option value="-">Sub</option>
        <option value="*">Mul</option>
      </select>
      <Display value={throttledValue} onChange={onChange} />
    </div>
  );
};

// const App = () => {
//   const [value, setValue] = React.useState({ value: "" });
//   const throttledValue = useThrottle(value, 200);

//   return (
//     <div style={{ width: 300, margin: "40px auto" }}>
//       <input
//         type="text"
//         value={value.value}
//         placeholder="Throttled input"
//         style={{ width: "100%" }}
//         onChange={({ currentTarget }) => {
//           setValue({ value: currentTarget.value });
//         }}
//       />
//       <br />
//       <br />
//       <pre>{pretty({ throttledValue })}</pre>
//       <pre>{pretty(value)}</pre>
//     </div>
//   );
// };

export default App;
