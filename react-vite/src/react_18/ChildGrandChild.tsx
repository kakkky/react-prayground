import React, { useContext } from 'react';
import { Config, Context } from './ParentContext';

const ChildGrandChild = () => {
  const { locale, mode } = useContext<Config>(Context);
  return (
    <div className="border border-black p-1">
      ChildGrandChild
      <p>コンテキストから受け取った情報:{locale}</p>
      <p>コンテキストから受け取った情報:{mode}</p>
    </div>
  );
};

export default ChildGrandChild;
