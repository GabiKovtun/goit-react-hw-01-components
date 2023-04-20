import PropTypes from "prop-types";
import css from './statistics.module.css';
import { FaPercent } from "react-icons/fa";
import {getRandomColor} from 'utilites/randomColor'

export const Statistics = ({stats, title}) => {
  return (
    <section className={css.statistics}>
       {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.item} 
            style={{
              backgroundColor: getRandomColor(),
            }}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}<FaPercent className={css.icon} size={30}/></span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stat:PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage:PropTypes.number
  })
 }