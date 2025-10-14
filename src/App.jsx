import { useState } from 'react'

function App() {
  const [variableName, setVariableName] = useState(initialValue);

  {/*
    VariableName --> current value of the state.
    setVariableName --> function to update that value.
    initialValue --> the default value you want to start with.    
    */}
  return (
    <>
    <button>-</button>
    <span>0</span>
    <button>+</button>
    </>
  )
}

export default App
