import { useState } from 'react';

function CallbackRef() {
  const [show, setShow] = useState(false);
  const hanleClick = () => {
    setShow((prev) => !prev);
  };
  //   コールバックRef
  const callbackRef: (ref: HTMLInputElement | null) => void = (ref) => {
    if (ref) {
      ref.focus();
    }
  };

  return (
    <div>
      <button onClick={hanleClick}>拡張</button>
      {show && (
        <div>
          <input type="text" ref={callbackRef} />
        </div>
      )}
    </div>
  );
}

export default CallbackRef;
