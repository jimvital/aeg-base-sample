import React from "react";
import "./AllLatest.scss";

import { Card } from "../../common";

import summerLunchMenu from "../../assets/images/all-latest/Image-01@2x.jpg";
import traditionalChristmasEve from "../../assets/images/all-latest/Image-02@2x.jpg";
import takingTasteFurther from "../../assets/images/all-latest/Image-03@2x.jpg";

const CARDS = [
  {
    id: "summer-lunch-menu",
    imageSrc: summerLunchMenu,
    title: "summer lunch menu by mark best",
    description:
      "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    onReadMore: () => console.log("Summer Lunch Menu By Mark Best"),
  },
  {
    id: "traditional-christmas-eve",
    imageSrc: traditionalChristmasEve,
    title: "a traditional christmas eve, mark best style",
    description:
      "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
    onReadMore: () =>
      console.log("A Traditional Christmas Eve, Mark Best Style"),
  },
  {
    id: "taking-taste-further",
    imageSrc: takingTasteFurther,
    title: "taking taste further",
    description:
      "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
    onReadMore: () => console.log("Taking Taste Further"),
  },
];

const AllLatest: React.FC = () => {
  return (
    <div className="all-latest">
      <h1 className="header">all the latest from aeg</h1>
      <div className="cards-container">
        {CARDS.map((props) => (
          <Card key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
};

export default AllLatest;
