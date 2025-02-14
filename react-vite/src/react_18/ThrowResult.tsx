import { JSX } from 'react';
import wrapPromise from './wrapPromise';

const info = getInfo(); // ここで非同期処理を開始しておく

function ThrowResult(): JSX.Element | undefined | Promise<string> {
  const result = info.get(); // 外で処理した結果を使用
  return <p>{result}</p>;
}

export default ThrowResult;

function getInfo() {
  return wrapPromise(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('succeed');
        } else {
          reject('Error');
        }
      }, 1000);
    }),
  );
}
