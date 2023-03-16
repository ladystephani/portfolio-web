import "./App.css";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Zhe Qi Li</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <Projects />
    </div>
  );
}

export default App;
