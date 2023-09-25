import React from "react";
import "./AnswerNeeds.scss";

import { ImageModal } from "../../common";

import fieldWalk from "../../assets/images/answer-needs/Image-01@2x.jpg";
import bowl from "../../assets/images/answer-needs/Image-02@2x.jpg";
import asparagus from "../../assets/images/answer-needs/Image-03@2x.jpg";

const AnswerNeeds: React.FC = () => {
  return (
    <div className="answer-needs">
      <div className="field">
        <ImageModal modalContent={<img src={fieldWalk} alt="field-large" />}>
          <img src={fieldWalk} alt="field" />
        </ImageModal>
      </div>
      <div className="veggies">
        <ImageModal modalContent={<img src={bowl} alt="bowl-large" />}>
          <img src={bowl} alt="bowl" />
        </ImageModal>
        <ImageModal
          modalContent={<img src={asparagus} alt="asparagus-large" />}
        >
          <img src={asparagus} alt="asparagus" />
        </ImageModal>
      </div>
      <div className="description">
        <h2 className="header">answer your body's needs</h2>
        <hr />
        <p>
          The way ingredients are sourced affects the way we nourish our bodies.
          Author Mark Schatzer believes our body naturally develops an appetite
          for the foods and nutrients it needs to be healthy, but that
          artificial flavorings are getting in the way. This can be reversed by
          focusing on high-quality ingredients and being mindful as your
          appetite guides you to consume according to your body's needs.
        </p>
        <h4 className="sub-header">be mindful</h4>
        <p className="bold">
          Sourcing local or organic food is a good way to start being more
          mindful about what you're cooking and eating.
        </p>
      </div>
    </div>
  );
};

export default AnswerNeeds;
