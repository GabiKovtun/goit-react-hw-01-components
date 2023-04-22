import PropTypes from 'prop-types';
import css from './friendList.module.css';
import { FaUserCircle } from 'react-icons/fa';

export const FriendInfo = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span className={`${css.icon} ${css[isOnline]}`}>
        <FaUserCircle size={20} className={css.icon} />
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};


FriendInfo.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};