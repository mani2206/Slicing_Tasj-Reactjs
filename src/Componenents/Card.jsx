const Card = ({ data }) => {
  const {
    cardImg,
    userImg,
    userName,
    role,
    firstLine,
    firstCard,
    secondCard,
    thirdCard,
    cardDescription,
  } = data;

  return (
    <div
      className={`${firstCard ? "desktopFirstCard card" : "card"} ${
        secondCard ? "desktopSecondCard card" : "card"
      } ${thirdCard ? "desktopThirdCard card" : "card"}`}
    >
      <div className="card-img-container">
        <img src={cardImg} alt="presentation" className="card-img" />
        <div className="content-over-img">
          <img src={userImg} alt="person" className="tiny-img" />
          <div>
            <h4>{userName}</h4>
            <p>{role}</p>
          </div>
        </div>
      </div>
      <h3>{firstLine}</h3>
      <p className="description">{cardDescription}</p>
    </div>
  );
};

export default Card;
