import React, { useEffect, useRef, useState } from 'react';
import RefChildren from './RefChildren';

function HookRef() {
  const text = useRef<HTMLInputElement>(null);
  //   子要素のインプット属性にフォーカス
  useEffect(() => {
    text.current?.focus();
  });
  return (
    <div>
      <RefChildren text={text} />
    </div>
  );
}

export default HookRef;
