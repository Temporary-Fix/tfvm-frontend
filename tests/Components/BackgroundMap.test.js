import { render, screen } from '@testing-library/react';
import BackgroundMap from '../../src/components/BackgroundMap/BackgroundMap';

describe("BackgroundMap Component Test", () => {

    test('Render wihthout crashing', () => {
        render(<BackgroundMap />)
    });

    test('Render Map', () => {
        render(<BackgroundMap />)
        const map = screen.getByTestId("map");
        expect(map).toBeInTheDocument();
    });

});