import { render, screen } from '@testing-library/react';
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
