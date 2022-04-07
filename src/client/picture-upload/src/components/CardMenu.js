import "../styles/cardMenu.scss";


function CardMenu(props) {
  const { caption } = props
  return (
    <div className="cardMenu">
      <div className="interactions">

        <b>{caption}</b>
      </div>
    </div>
  );
}

export default CardMenu;