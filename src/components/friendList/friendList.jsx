import { FriendInfo } from "./friendInfo";

export const FriendList = ({friends}) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <FriendInfo
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};
