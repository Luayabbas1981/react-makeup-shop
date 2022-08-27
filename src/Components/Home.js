import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <p className="home-title my-4 "> Home of beauty</p>
      <article className="home-description">
        Cosmetics are constituted mixtures of chemical compounds derived from
        either natural sources, or synthetically created ones.Cosmetics have
        various purposes. Those designed for personal care and skin care can be
        used to cleanse or protect the body or skin. Cosmetics designed to
        enhance or alter one's appearance makeup can be used to conceal
        blemishes, enhance one's natural features such as the eyebrows and
        eyelashes, add color to a person's face, or change the appearance of the
        face entirely to resemble a different person, creature or object.
        Cosmetics can also be designed to add fragrance to the body.
      </article>
      <img src={require("../lips.png")} alt="lips" />
    </div>
  );
}

export default Home;
