import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <header>header</header>
    <section>
      <div className="row">
        <div className="col">
          <div className="card">
            <img src="./images/01.png" alt="shoe3" />
            <div className="card-body">
              <h5 className="card-title">shoe1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-to-card">add to card</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="./images/02.png"  alt="shoe1"/>
            <div className="card-body">
              <h5 className="card-title">shoe1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-to-card">add to card</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="./images/03.png" alt="shoe2"/>
            <div className="card-body">
              <h5 className="card-title">shoe1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="add-to-card">add to card</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>footer</footer>
  </>
);
