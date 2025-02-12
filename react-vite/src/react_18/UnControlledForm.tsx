import { useRef } from 'react';

function UnControlledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const show = () => {
    if (nameRef.current && ageRef.current) {
      console.log(`${nameRef.current.value}さん、${ageRef.current.value}`);
    }
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">名前：</label>
          <input
            type="text"
            name="name"
            defaultValue="山田太郎"
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="name">年齢：</label>
          <input type="text" name="age" defaultValue="1" ref={ageRef} />
        </div>
        <button type="button" onClick={show}>
          ボタン
        </button>
      </form>
    </>
  );
}

export default UnControlledForm;
