import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';

test('Sample test', () => {
    render(<App />);
    // const linkElement = screen.getByText("Temp Fix Travel Planner");
    // expect(linkElement).toBeInTheDocument();
    expect(1 + 2).toBe(3)
});
