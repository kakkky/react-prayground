import { useState } from 'react';

/**s */
export default function TextInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="text-input"
      />
      <p>Enterd Text:{text}</p>
    </div>
  );
}
