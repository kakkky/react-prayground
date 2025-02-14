import React from 'react';

type Props = {
  text: React.Ref<HTMLInputElement> | undefined;
};

function RefChildren({ text }: Props) {
  return (
    <div>
      <label htmlFor="ref">ラベル：</label>
      <input type="text" ref={text} />
    </div>
  );
}

export default RefChildren;
