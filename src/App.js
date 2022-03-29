import "./App.css";
import PageOne from "./pages/PageOne";
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree/PageThree';

function App() {
  return (
    <div className="App">
      <div className="App-content">
      <PageOne />
      <PageTwo />
      <PageThree />
      </div>
    </div>
  );
}

export default App;
