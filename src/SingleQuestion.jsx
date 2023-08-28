import { useState } from "react";

const SingleQuestion = ({ title, info }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleText = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={toggleText}>
          {isVisible ? "-" : "+"}
        </button>
      </header>
      {isVisible && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
