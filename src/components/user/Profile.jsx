import PropTypes from 'prop-types';
import css from './profile.module.css';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
    return (
     <div className={css.profile}>
<div className={css.description}>
    <img className={css.avatar}
     src={avatar}
     alt={username}
    />
   <p className={css.name}>{username}</p>
   <p className={css.tag}>@{tag}</p>
   <p className={css.location}>{location}</p>
 </div>
 <ul className={css.stats}>
   <li className={css.statsElement}>
     <span className={css.label}>Followers</span>
     <span className={css.quantity}>{stats.followers}</span>
   </li>
   <li className={css.statsElement}>
     <span className={css.label}>Views</span>
     <span className={css.quantity}>{stats.views}</span>
   </li>
   <li className={css.statsElement}>
     <span className={css.label}>Likes</span>
     <span className={css.quantity}>{stats.likes}</span>
   </li>
 </ul>
</div>)}

UserProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
 }