import bannerImg from "../assets/Images/Illustration.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="section-container">
        <div className="text-container">
          <h1>
            We take care <br />
            <span className="highlight">Marketing</span>
            <br />
            things
          </h1>

          <button className="banner-btn">Pick a Plan</button>
        </div>
        <div className="image-container">
          <img src={bannerImg} alt="banner image" className="banner-img" />
          <hr className="line" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
