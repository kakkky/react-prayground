import React, { useLayoutEffect, useState } from 'react';

function BasicEffect() {
  const [count, setCount] = useState(0);

  const sleep = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };

  useLayoutEffect(() => {
    sleep().then(() => {
      console.log('fired!');
      // 描画時に実行する
      const t = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 500);
      // アンマウント時に実行する
      // 副作用関数の返り値として「クリーンアップ関数」を返し、
      // リソースの解放
      return () => {
        console.log('clean up!');
        clearInterval(t);
      };
    });
  }, []);
  return (
    <div>
      <p className={count < 0 ? `text-red-700` : `text-black`}>{count}</p>
    </div>
  );
}

export default BasicEffect;
