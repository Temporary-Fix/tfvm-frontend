import { render, screen } from '@testing-library/react';
import BackgroundMap from '../src/components/BackgroundMap/BackgroundMap.jsx'

const location = { lat: 30.5446, lng: -87.2120 };

// TODO: Migrate to vitest because vite-jest hasn't been maintained for over 2 years
describe('Test suite', () => {
    // render(<Map/>);
    // render(<BackgroundMap location={location} />);
    // const linkElement = screen.getByText("Temp Fix Travel Planner");
    // expect(linkElement).toBeInTheDocument();
    it('basic test', () => {
        expect(1 + 2).toBe(3)
    })
});
