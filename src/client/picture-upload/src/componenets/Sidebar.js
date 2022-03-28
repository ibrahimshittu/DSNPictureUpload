import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import PictureForm from "./PictureForm";
import Footer from "./Footer";

function Sidebar({accountName}) {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          accountName={accountName}
        />
        <PictureForm/>
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;