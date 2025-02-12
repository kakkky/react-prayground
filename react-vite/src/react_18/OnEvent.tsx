import React from 'react';

function OnEvent() {
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    str: string,
  ) => {
    console.log(e.timeStamp);
    console.log(str);
  };
  return (
    <>
      <button onClick={(e) => onClickHandler(e, 'str')}>ボタン</button>
    </>
  );
}

export default OnEvent;
