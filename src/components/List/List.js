import styles from './List.module.scss';
import Column from '../Column/Column.js'

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do<span>soon</span></h1>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <div className={styles.columns}>
               <Column icon="book" title="Books" />
               <Column icon="gamepad" title="Movies" />
               <Column icon="film" title="Games" />
            </div>
        </div>
    )
}

export default List;