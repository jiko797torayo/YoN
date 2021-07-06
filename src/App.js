import "./styles.css";
import { Answer } from "./components/organisms/Answer";
import { AnswerLayout } from "./components/templates/AnswerLayout";

export default function App() {
  return (
    <AnswerLayout>
      <Answer></Answer>
    </AnswerLayout>
  );
}
