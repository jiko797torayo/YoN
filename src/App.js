import { NoButton } from "./components/atoms/NoButton";
import { YesButton } from "./components/atoms/YesButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NoButton />
      <YesButton />
    </div>
  );
}
