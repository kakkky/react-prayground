import React, { useState } from 'react';

type FormType = {
  name: string;
  age: number;
};

function StateForm() {
  const [form, setForm] = useState<FormType>({ name: 'default', age: 1 });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 元の値とフォームの値をマージする
    setForm({
      ...form, //formをコピー
      // ブラケット名で囲むことで動的にプロパティ名を設定(算出プロパティ名)
      [e.target.name]: e.target.value, //
    });
  };
  const show = () => {
    console.log(`${form.name}さん、${form.age}さいなんですねぇ。`);
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">名前：</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">年齢：</label>
          <input
            type="text"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={show}>
          ボタン
        </button>
      </form>
      <p>
        {form.name}さん{form.age}さい
      </p>
    </>
  );
}

export default StateForm;
