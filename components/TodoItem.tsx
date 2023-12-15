import { Todo } from '../types';

interface Props {
  todo: Todo;
  removeTodo: (id: string) => void;
}

export default function TodoItem({ todo, removeTodo }: Props) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>x</button>
    </div>
  );
}