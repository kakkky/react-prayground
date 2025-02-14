import React, { useRef } from 'react';
import RefImperativeChild from './RefImperativeChild';

function RefImperativeParent() {
  const ref = useRef<{ focus: () => void }>(null);
  const handleClick = () => {
    ref.current!.focus();
  };
  return (
    <div>
      RefImperativeParent
      <RefImperativeChild ref={ref} />
      <button onClick={handleClick}>ボタン</button>
    </div>
  );
}

export default RefImperativeParent;
