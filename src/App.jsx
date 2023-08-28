import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h1>Questions</h1>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </main>
    </>
  );
};
export default App;
