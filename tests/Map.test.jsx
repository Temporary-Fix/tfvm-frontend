import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest'
import Map from '../src/pages/Map/Map'

describe('Map component', () => {
    render(<Map/>);

    it('renders title', () => {
        const linkElement = screen.getByText("Temp Fix Travel Planner");
        expect(linkElement).toBeInTheDocument();
    });

    it('works', () => {
        expect(1 + 2).toBe(3)
    });
});
