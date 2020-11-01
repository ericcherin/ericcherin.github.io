import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="top">
        <div className="empty"></div>
        <div className="name">Eric Cherin</div>
        <div className="links">
          <a href="https://www.linkedin.com/in/ericcherin/" target="_blank">
            <img className="logo" src="linkedin.svg" alt="HTML tutorial" />
          </a>
          <a href="https://github.com/ericcherin" target="_blank">
            <img className="logo" src="github.png" alt="HTML tutorial" />
          </a>
        </div>
      </div>
      <div className="about">
        <div className="empty-column"></div>
        <div className="left">
          <div className="rect"></div>
          <div className="col-text-div">
            <h4>Excellent Learner</h4>
            <ul>
              <li>
                I read textbooks, read tech blogs, and build small projects.
              </li>
              <li>I enjoy creating small prototypes with new technologies.</li>
              <li>Finished college with a Bachelors and Masters in 3 years.</li>
            </ul>

            <h4>Origami Master</h4>
            <ul>
              <li>Taught thousands of students origami.</li>
              <li>I started folding when I was two. I can fold anything.</li>
              <li>I can fold a mean paper airplane :)</li>
            </ul>

            <h4>Competitive Video Gamer</h4>
            <ul>
              <li>
                Top 99.8% in League of Legends Season 4 (Diamond 1, 40 lp).{" "}
              </li>
              <li>Top 98% in Super Smash Brothers Ultimate with Ness.</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="rect"></div>
          <div className="col-text-div">
            <h4>Featured Projects</h4>
            <ul>
              <li>
                <a href="https://fungamefuntime.com" target="_blank">
                  Quick Coder
                </a>
                : helps programmers improve their typing speed.
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fungamefuntime.warehouse"
                  target="_blank"
                >
                  Classic VR Tennis
                </a>
                : recreates{" "}
                <a href="https://en.wikipedia.org/wiki/Pong" taget="_blank">
                  Pong
                </a>{" "}
                in a classroom setting.
              </li>
            </ul>

            <h4>Joke Projects</h4>
            <ul>
              <li>
                <a
                  href="https://www.amazon.com/fungamefuntime-Do-Something-Useful/dp/B073PQXVM6"
                  target="_blank"
                >
                  Alexa, do something useful
                </a>
                : refuses to help. Inspired by{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Bartleby,_the_Scrivener"
                  target="_blank"
                >
                  Bartleby
                </a>
                .
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Useless_machine"
                  target="_blank"
                >
                  Useless machine
                </a>
                : starts a script that immediately turns off your computer
              </li>
            </ul>
          </div>
        </div>
        <div className="empty-column"></div>
      </div>
    </div>
  );
}

export default App;
