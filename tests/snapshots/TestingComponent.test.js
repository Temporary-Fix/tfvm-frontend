import renderer from 'react-test-renderer';
import Link from '../Link';
import TestingComponent from '../../src/Components/TestingComponent';

it('changes the class when hovered', () => {
    const component = renderer.create(
        <TestingComponent></TestingComponent>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseEnter();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseLeave();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});