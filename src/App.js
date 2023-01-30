import './App.css';
import { DoneList } from './components/DoneList';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList/>
      <DoneList/>
    </div>
  );
}

export default App;
