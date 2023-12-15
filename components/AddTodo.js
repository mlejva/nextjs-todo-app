import { useState } from 'react';

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo({ id: Date.now(), text });
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}