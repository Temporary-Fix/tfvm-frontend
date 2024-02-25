import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';

test('Displays Product Name', () => {
  render(<App />);
  const linkElement = screen.getByText("Temp Fix Travel Planner");
  expect(linkElement).toBeInTheDocument();
});
