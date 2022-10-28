import { useSelector } from "react-redux";
import Counter from "./components/Counter";

function App() {
  const state = useSelector((state) => state);

  console.log(state);

  return <Counter />;
}

export default App;
