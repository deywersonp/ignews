import { render, screen, waitFor } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Button')).toBeInTheDocument();
  }, { timeout: 4000 });
});