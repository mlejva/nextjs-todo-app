import { render, screen } from '@testing-library/react';
import TodoList from '../../components/TodoList';

describe('TodoList', () => {
  it('renders a list', () => {
    const todos = [{ id: 1, title: 'Test todo' }];
    render(<TodoList todos={todos} />);

    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(1);
  });
});
