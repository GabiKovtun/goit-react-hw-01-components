export const FriendInfo = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id}>
      <span >{isOnline}</span>
      <img  src={avatar} alt={name} width="48" />
      <p >{name}</p>
    </li>
  );
};
