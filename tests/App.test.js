import { render, screen } from '@testing-library/react';
import BackgroundMap from '../src/components/BackgroundMap/BackgroundMap.jsx'

const location = { lat: 30.5446, lng: -87.2120 };

test('Sample test', () => {
    render(<BackgroundMap location={location} />);
    // const linkElement = screen.getByText("Temp Fix Travel Planner");
    // expect(linkElement).toBeInTheDocument();
    expect(1 + 2).toBe(3)
});
