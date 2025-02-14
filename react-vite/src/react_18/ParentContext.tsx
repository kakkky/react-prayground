import React, { createContext } from 'react';
import ChildContext from './ChildContext';

export type Config = {
  locale: string;
  mode: string;
};

const config: Config = {
  locale: 'ja',
  mode: 'dark',
};

// コンテキストを作成
// 引数にはdefalutをとる
export const Context = createContext<Config>(config);

const ParentContext = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">ParentContext</h1>
      <Context value={config}>
        <ChildContext />
      </Context>
    </div>
  );
};

export default ParentContext;
