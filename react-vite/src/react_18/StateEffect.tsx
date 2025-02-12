import { useState } from 'react';

type Props = {
  init: number;
};

function StateEffect({ init }: Props) {
  // PropsはStateによってのみ変更されていい
  const [count, setCount] = useState<number>(init + 1);
  const counter = () => {
    setCount(count + 1);
  };
  console.log('rendering StateEffect');
  return (
    <>
      <div>
        <button onClick={counter}>Count</button>
        <p>Number:{count}</p>
      </div>
    </>
  );
}

export default StateEffect;
