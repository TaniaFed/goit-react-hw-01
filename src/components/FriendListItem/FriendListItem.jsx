import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friend}>
      <img src={avatar} alt="Avatar" width="90" />
      <p className={css.friendNameText}>{name}</p>
      <p className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
