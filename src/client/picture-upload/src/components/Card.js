import "../styles/card.scss";
import Profile from "./Profile";
import CardMenu from "./CardMenu";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import lazyload from "../images/lazyload.jpg";

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
      <LazyLoadImage effect="blur" placeholderSrc={lazyload} className="cardImage" src={image} alt="image" />
      <CardMenu caption={caption}/>
      <div className="timePosted">{hours} HOURS AGO </div>
    </div>
  );
}

export default Card;
