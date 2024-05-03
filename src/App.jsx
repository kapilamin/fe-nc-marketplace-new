import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Home from "./components/Home";
import { ItemList } from "./components/ItemList";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Categories />
    </>
  );
}

export default App;
