import { useState } from 'react';
import { Todo } from '../types';

interface Props {
  addTodo: (todo: Todo) => void;
}

export default function AddTodo({ addTodo }: Props) {
  const [text, setText] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    addTodo({ id: Date.now().toString(), text });
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}