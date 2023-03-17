import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
    </div>
  );
}

export default App;
