import "../styles/profile.scss";

function Profile(props) {
  const {
    accountName,
  } = props;
   

  return (
    <div className="profile">
      {(
        <div className="textContainer">
          <span className="accountName"><b>{accountName}</b></span>
        </div>
      )}
     
    </div>
  );
}

export default Profile;
