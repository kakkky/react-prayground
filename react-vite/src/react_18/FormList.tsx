import React, { useState } from 'react';

type ObjectT = {
  subject: string[];
};

function FormList() {
  const [form, setForm] = useState<ObjectT>({ subject: [] });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected: string[] = [];
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        selected.push(opt.value);
      }
    }
    setForm({
      ...form,
      subject: [...form.subject, ...selected],
    });
  };
  const handleClick = () => {
    console.log(form);
  };
  return (
    <>
      <form>
        <label htmlFor="subject">教科を選択:</label>
        <select
          name="subject"
          id="subject"
          size={4}
          multiple
          value={form.subject}
          onChange={handleChange}
        >
          <option value="japanese">国語</option>
          <option value="math">数学</option>
          <option value="eng">英語</option>
          <option value="science">理科</option>
        </select>
        <button type="button" onClick={handleClick}>
          送信
        </button>
      </form>
      <div>
        <h3>選択された教科:</h3>
        <ul>
          {form.subject.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FormList;
