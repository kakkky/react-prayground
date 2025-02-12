import { useState } from 'react';

function StateBasic() {
  const [count, setCount] = useState<number>(0);
  // const counter = () => {
  //   setCount(count + 1);
  // };
  // 関数型の引数を渡すと、prevにて最新の値を参照できる
  const counter = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>
        <button onClick={counter}>Count</button>
        <p>Number:{count}</p>
      </div>
    </>
  );
}

export default StateBasic;
