import renderer from 'react-test-renderer';
import TodoListSection from './TodoListSection';

describe('TodoListSection', () => {
    it('renders correctly', () => {
        
        const title = 'Todo';
        const inputValues = ['Todo 1', 'Todo 2'];
        const description = '';
        const onInputChange = jest.fn();
        const onEnterPress = jest.fn();
        const handleCheck = jest.fn();

        const tree = renderer.create(
        <TodoListSection
        title={title}
        inputValues={inputValues}
        description={description}
        onInputChange={onInputChange}
        onEnterPress={onEnterPress}
        handleCheck={handleCheck}
        />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});