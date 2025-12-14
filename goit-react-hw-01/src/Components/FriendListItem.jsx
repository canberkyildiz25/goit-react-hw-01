import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="friend-item">
      <img src={avatar} alt="Avatar" width="48" className="friend-avatar" />
      <p className="friend-name">{name}</p>
      <p className={isOnline ? "status online" : "status offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
