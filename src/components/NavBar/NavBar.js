import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className={styles.nav}>
                <i className='fa fa-tasks tasks_icon'></i>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/About">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/Favorite">Favorite</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;