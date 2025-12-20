import PropTypes from "prop-types";
import styles from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__header}>
        <img className={styles.profile__avatar} src={image} alt="User avatar" />
        <p className={styles.profile__name}>{name}</p>
        <p className={styles.profile__tag}>@{tag}</p>
        <p className={styles.profile__location}>{location}</p>
      </div>
      {stats && (
        <ul className={styles.profile__stats}>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      )}
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
