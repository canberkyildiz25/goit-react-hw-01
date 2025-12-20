import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles["friend-item"]}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className={styles["friend-avatar"]}
      />
      <p className={styles["friend-name"]}>{name}</p>
      <p
        className={
          styles.status + " " + (isOnline ? styles.online : styles.offline)
        }
      >
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
