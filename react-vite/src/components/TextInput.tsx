import { useState } from 'react';

export default function TextInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>ヨプようd</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="text-input"
      />
      <p>Enterd Text:{text}</p>
      <p>あfvsbv</p>
    </div>
  );
}
