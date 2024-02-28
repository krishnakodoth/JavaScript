const ReactX = (() => {
  // let state;
  // let state = [];
  let hooks = [];
  let index = 0;
  const useState = (initialState) => {
    let localindex = index;
    index++;

    if (hooks[localindex] === undefined) {
      hooks[localindex] = initialState;
    }
    const setterFunc = (newStateVal) => {
      hooks[localindex] = newStateVal;
    };
    return [hooks[localindex], setterFunc];
  };

  const useEffect = (callback, dependencyArray) => {
    let hasChanged = true;
    const prevDependencies = hooks[index];
    if (dependencyArray && prevDependencies) {
      

      if (prevDependencies) {
        hasChanged = false;
      }

      dependencyArray.forEach((dependency, index) => {
        const prevDependency = prevDependencies[index];
        const isSame = Object.is(prevDependency, dependency);
        if (!isSame) {
          hasChanged = true;
        }
      });
    }

    if (hasChanged) {
      callback();
    }

    hooks[index] = dependencyArray;
    index++;
  };

  const resetIndex = () => {
    index = 0;
  };
  return {
    useState,
    useEffect,
    resetIndex,
  };
})();

// Component
const { useState, useEffect, resetIndex } = ReactX;
const Component = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("KP");

  useEffect(() => {
    console.log("Call useEffect");
  },[name]);

  console.log(counter);
  console.log(name);
  if (counter <= 5) {
    setCounter(counter + 1);
  }

  if (name !== "Prasad" && counter === 2) {
    setName("Prasad");
  }
};

Component();
resetIndex(); // Reset the state index to 0 after component render
Component(); // Call component again bz state change will re-render the component
resetIndex(); // Reset the state index to 0 after component render
Component(); // Call component again bz state change will re-render the component
resetIndex(); // Reset the state index to 0 after component render