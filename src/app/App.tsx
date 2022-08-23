import { ChoreLister } from './../features/ChoreLister/ChoreLister';

import 'primereact/resources/themes/fluent-light/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import './../styles/App.css';

function App() {
  return (
    <div className="App p-3">
      <main>
        <ChoreLister />
      </main>
    </div>
  );
}

export default App;
