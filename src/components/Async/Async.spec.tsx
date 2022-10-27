import { render, screen } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello World')).toBeInTheDocument();
  expect(await screen.findByText('Button', {}, { timeout: 4000 })).toBeInTheDocument();
});