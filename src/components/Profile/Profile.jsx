import userData from '../../data/userData.json';
import styles from './Profile.module.css';
// import clsx from "clsx";
// import css from "../components/Profile.module.css";

export default function Profile({
  name = userData.username,
  tag = userData.tag,
  location = userData.location,
  image = userData.avatar,
  stats = userData.stats,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardPoster} src={image} alt="User avatar" />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.nameText}>{name}</p>
        <p className={styles.tagText}>@{tag}</p>
        <p className={styles.locationText}>{location}</p>
      </div>
      <ul className={styles.cardFooter}>
        <li className={styles.statsBox}>
          <span className={styles.statsText}>Followers</span>
          <span className={styles.statsNumber}>{stats.followers}</span>
        </li>
        <li className={styles.statsBox}>
          <span className={styles.statsText}>Views</span>
          <span className={styles.statsNumber}>{stats.views}</span>
        </li>
        <li className={styles.statsBox}>
          <span className={styles.statsText}>Likes</span>
          <span className={styles.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
