import { useEffect, useRef, useState } from "react";

const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(function () {
      console.log("curr", Date.now(), "lastRef", lastRan);
      console.log("limit", limit - (Date.now() - lastRan.current));
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return [throttledValue, setThrottledValue];
};

// import { useState, useEffect, useRef } from "react";

// const useThrottle = (value, delay) => {
//   const [throttledValue, setThrottledValue] = useState(value);
//   const timeoutRef = useRef(null);
//   const previousValueRef = useRef(value);

//   useEffect(() => {
//     if (value !== previousValueRef.current) {
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = setTimeout(() => {
//         console.log(value);
//         setThrottledValue(value);
//       }, delay);
//       previousValueRef.current = value;
//     }
//   }, [value, delay]);

//   return [throttledValue, setThrottledValue];
// };

export default useThrottle;
