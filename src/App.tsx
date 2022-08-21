import './App.css';
import { ChoreLister } from './features/ChoreLister/ChoreLister';

function App() {
  return (
    <div className="App p-3">
      <h1 className="h1 mb-5">Chores - {new Date().toLocaleDateString()} 🗓️</h1>
      <main>
        <ChoreLister />
      </main>
    </div>
  );
}

export default App;
