import Alert from "./components/Alert";
import Cards from "./components/cards";
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
