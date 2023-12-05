import React, { useState } from 'react';

function Display() {
  const [inputText, setInputText] = useState('');

  const handle = (event) => {
    const text = event.target.value;
    setInputText(text);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={handle}
        placeholder="Type something..."
      />
      <p>Current Value: {inputText}</p>
    </div>
  );
}

export default Display;