import TodoItem from './TodoItem';
import { Todo } from '../types';

interface Props {
  todos: Todo[];
  removeTodo: (id: string) => void;
}

export default function TodoList({ todos, removeTodo }: Props) {
  return (
    <div>{todos.map((todo, index) => (
      <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
    ))}</div>
  );
}