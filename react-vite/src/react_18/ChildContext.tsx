import React from 'react';
import ChildGrandChild from './ChildGrandChild';

const ChildContext = () => {
  return (
    <div className="border border-black p-10">
      <p>ChildContext</p>
      <ChildGrandChild />
    </div>
  );
};

export default ChildContext;
