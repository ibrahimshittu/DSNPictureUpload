import "../styles/navigation.scss";
import Menu from "./Menu";


function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <small>Memories</small>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;