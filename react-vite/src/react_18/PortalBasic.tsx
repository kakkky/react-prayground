import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function PortalBasic() {
  const [show, setShow] = useState(false);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        ボタン
      </button>
      {show &&
        createPortal(
          <div className="border border-black p-2 m-3  flex justify-center items-center">
            <p>ダイアログ</p>
          </div>,
          //   null可能性はなし
          document.getElementById('dialog')!,
        )}
    </div>
  );
}

export default PortalBasic;
