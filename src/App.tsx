import Alert from "./components/Alert";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Alert children="Fruit Flashcards" />
      <Cards />
    </div>
  );
}

export default App;
