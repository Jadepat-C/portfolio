import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page greeting and navigation', () => {
  render(<App />);
  expect(screen.getAllByText(/Hello World!/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('link', { name: /Profile/ })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Projects/ })).toBeInTheDocument();
});

test.each([
  ['/profile', /Education/],
  ['/projects', /Personal Website/],
])('renders %s', (path, text) => {
  window.history.pushState({}, '', path);
  render(<App />);
  expect(screen.getAllByText(text).length).toBeGreaterThan(0);
});

test('the mobile menu button opens the menu and picking a page closes it', () => {
  window.history.pushState({}, '', '/');
  render(<App />);
  const toggle = screen.getByRole('button', { name: /toggle navigation/i });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');

  fireEvent.click(screen.getByRole('link', { name: /Projects/ }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
