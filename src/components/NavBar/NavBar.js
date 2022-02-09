import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav>
            <div className={styles.nav}>
                <i className='fa fa-tasks tasks_icon'></i>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                        <a href='/favorite'>Favorite</a>
                        <a href='/about'>About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;