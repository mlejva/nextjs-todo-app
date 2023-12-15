export default function TodoList({ todos, removeTodo }) {
  return (
    <div>{todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} removeTodo={removeTodo} />
    ))}</div>
  );
}