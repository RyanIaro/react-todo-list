import renderer from 'react-test-renderer';
import DoneListSection from '../components/DoneListSection';
describe('DoneListSection', () => {
    it('renders correctly', () => {

        const title = 'Done';
        const done = ['Todo 1', 'Todo 2'];

        const tree = renderer.create(
            <DoneListSection
                title={title}
                done={done}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})