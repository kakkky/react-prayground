import React, { useImperativeHandle, useRef } from 'react';

type Props = {
  // voidででけたっぽい
  ref: React.Ref<{ focus: () => void }>;
};

function RefImperativeChild({ ref }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  // propsとして渡ってきたRefオブジェクトにfocus()メソッドを公開する
  useImperativeHandle(ref, () => {
    return {
      focus() {
        // ？はオプショナルチェイニング
        // null undefindでも可能(アクセスしない)
        inputRef.current?.focus();
      },
    };
  });
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default RefImperativeChild;
