import { NavLink } from 'react-router-dom';
import './header.scss';

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
const links = ['arrivals', 'departures'];

const Header = () => {
  return (
    <div className='header-container'>
      {links.map((link, i) => (
        <NavLink className='nav-link' to={`/${link}`} key={i}>
          {capitalizeFirstLetter(link)}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
