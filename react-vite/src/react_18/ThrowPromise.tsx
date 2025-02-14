import { JSX } from 'react';

let flag: boolean = false;
function ThrowPromise(): JSX.Element | null | Promise<string> {
  if (flag) {
    return <p>完了</p>;
  }
  // Promiseをthrowする（<Suspense>のルール）
  throw new Promise((resolve) => {
    setTimeout(() => {
      flag = true;
      resolve('Success');
    }, 3000);
  });
}

export default ThrowPromise;
