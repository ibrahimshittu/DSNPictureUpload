import "../styles/card.scss";
import Profile from "./Profile";
import CardMenu from "./CardMenu";

function Card(props) {
  const {
    caption,
    accountName,
    storyBorder,
    image,
    hours,
  } = props;

  return (
    <div className="card" >
      <header>
        <Profile iconSize="medium" accountName={accountName} storyBorder={storyBorder} />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu caption={caption}/>
      <div className="timePosted">{hours} HOURS AGO </div>
    </div>
  );
}

export default Card;
