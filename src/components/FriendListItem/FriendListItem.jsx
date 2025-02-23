import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friend}>
      <img src={avatar} alt="Avatar" width="90" />
      <p className={css.friendNameText}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
