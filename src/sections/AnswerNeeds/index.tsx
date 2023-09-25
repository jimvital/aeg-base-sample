import React from "react";
import "./AnswerNeeds.scss";

import field from "../../assets/images/answer-needs/Image-01.jpg";
import bowl from "../../assets/images/answer-needs/Image-02.jpg";
import asparagus from "../../assets/images/answer-needs/Image-03.jpg";

const AnswerNeeds: React.FC = () => {
  return (
    <div className="answer-needs">
      <div className="field">
        <img src={field} alt="field" />
      </div>
      <div className="veggies">
        <img src={bowl} alt="bowl" />
        <img src={asparagus} alt="asparagus" />
      </div>
      <div className="description">
        <h2>Answer your body's needs</h2>
        <hr />
        <p>
          The way ingredients are sourced affects the way we nourish our bodies.
          Author Mark Schatzer believes our body naturally develops an appetite
          for the foods and nutrients it needs to be healthy, but that
          artificial flavorings are getting in the way. This can be reversed by
          focusing on high-quality ingredients and being mindful as your
          appetite guides you to consume according to your body's needs.
        </p>
        <h4>Be mindful</h4>
        <p className="bold">
          Sourcing local or organic food is a good way to start being more
          mindful about what you're cooking and eating.
        </p>
      </div>
    </div>
  );
};

export default AnswerNeeds;
