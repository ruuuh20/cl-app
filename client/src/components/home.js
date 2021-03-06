import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Standings from "./standings";
import Image from "../assets/images/winner.jpg";

import bgVid from "../assets/videos/bg1.mp4";
import Prediction from "./prediction";
import { AddPrediction } from "./addPrediction";
import Statistics from "./statistics";
import Featured from "./featured";
import Latest from "./latest";

const recentMatch = {
  team1: "Paris",
  team2: "Bayern",
  score1: 0,
  score2: 1,
  date: "23 Aug 2020 ",
};

const Home = () => {
  const [query, setQuery] = useState("");

  const url =
    query &&
    `http://api.football-data.org/v2/competitions/2001/standings?standingType=TOTAL`;

  const { status, data, error } = useFetch(url);

  const handleClick = () => {
    //    let query = "2001";
    setQuery("2001");
    console.log(status, data);
  };

  const articles = data.standings;

  return (
    <div className="main">
      <div className="container">
        <div className="col-right">
          <section className="rel">
            <div className="bg-vid">
              <div className="sticky">
                <video autoPlay muted loop src={bgVid}></video>
              </div>
            </div>
            <div className="match-info">
              <div className="sticky flex-col col-30">
                <div className="p-1">
                  <div className="recent-match">
                    <h4 className="title">Final Match</h4>
                    <hr></hr>
                    <p>{recentMatch.date}</p>
                    <div className="match">
                      <span>{recentMatch.team1}</span>
                      <span>{recentMatch.score1}</span>
                      <span>-</span>
                      <span>{recentMatch.score2}</span>
                      <span>{recentMatch.team2}</span>
                    </div>
                  </div>
                  <div className="prediction-container">
                    <Prediction />
                    <AddPrediction />
                  </div>
                  <div className="winner">
                    <h4>Winners: Bayern Munich</h4>
                    <img src={Image}></img>
                    <a href="https://www.uefa.com/uefachampionsleague/match/2030150--paris-vs-bayern/postmatch/report/">
                      <small>credit: uefa </small>
                    </a>
                  </div>
                </div>
              </div>

              <div className="standings-wrapper col-70">
                <Standings />
              </div>
            </div>
          </section>
          <Latest />
          <Statistics />
          <Featured />
        </div>
      </div>
    </div>
  );
};

export default Home;
