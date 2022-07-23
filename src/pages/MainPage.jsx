import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <h1>Windbnb</h1>

      <div style={{marginBottom : '1em'}}>
        Solution for a challenge from{" "}
        <a href="http://devchallenges.io" target="_blank">
          Devchallenges.io
        </a>
        .
      </div>

      <div>
        <h3>
          <Link to="/challenge">Demo</Link>
          <span> | </span>
          <a href="https://github.com/emifrese/windbnb-challenge">Solution</a>
          <span> | </span>
          <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY">
            Challenge
          </a>
        </h3>
      </div>
    </>
  );
};

export default MainPage;
