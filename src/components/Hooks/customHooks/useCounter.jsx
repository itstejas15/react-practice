import { useState } from 'react';

const useCounter = (InitialVal = 0) => {
  const [count, setCount] = useState(InitialVal)

  const Increment = () => {
    setCount(count + 1)
  }
  const Decrement = () => {
    setCount(count - 1)
  }

  return [count, Increment, Decrement]
}

export default useCounter;