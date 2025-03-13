import "./Home.css";
import Home1 from "../assets/Home-img.png";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="Home-text">
          <p>MODERN INTERIOR</p>
          <h1>Create Your Interior Design.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="home-btn">CONTACT</button>
        </div>
        <div className="Home-img">
          <img src={Home1} alt="mebellar" />
        </div>
      </div>
    </>
  );
};

export default Home;
