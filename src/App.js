import "./App.css";
import PageOne from "./pages/PageOne";
import PageTwo from './pages/PageTwo';
import InfoSection from "./pages/InfoSection/InfoSection";
import DownArrow from "./components/DownArrow/DownArrow";
import WaveBlock from "./pages/WaveBlock/WaveBlock";

function App() {
  return (
    <div className="App">
      <PageOne />
      <PageTwo />
    </div>
  );
}

export default App;
