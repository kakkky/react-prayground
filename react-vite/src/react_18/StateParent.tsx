import { useState } from 'react';
import StateChildren from './StateChildren';

function StateParent() {
  const [count, setCount] = useState(0);
  const update = (step: number) => {
    setCount((prev) => prev + step);
  };
  return (
    <>
      {count}
      <StateChildren step={1} update={update} />
      <StateChildren step={-1} update={update} />
      <StateChildren step={10} update={update} />
    </>
  );
}

export default StateParent;
