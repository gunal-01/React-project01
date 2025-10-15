import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  {/*
    Count:VariableName --> current value of the state.
    setCount:setVariableName --> function to update that value.
    0:initialValue --> the default value you want to start with.    
    */}

    const handleIncrement = () => {
      setCount(count + 1);
    };

    const handleDecrement = () => {
      setCount(count - 1);
    }

  return (
    <>
    <button onClick={handleDecrement}>-</button>
    <span>{count}</span>
    <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default App;
