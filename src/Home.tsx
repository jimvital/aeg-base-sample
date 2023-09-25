import React from "react";

import { AnswerNeeds, AllLatest } from "./sections";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <AnswerNeeds />
      <AllLatest />
    </div>
  );
};

export default Home;
