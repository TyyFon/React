import styles from './Column.module.scss';
import CardForm from './../CardForm/CardForm.js';
import Card from './../Card/Card.js'
import { useSelector } from 'react-redux';

const Column = ({
    id, 
    icon, 
    title, 
    action
}) => {
    const searchString = useSelector(state => state.searchString);
    const cards = useSelector(
        state => state.cards.filter(
            card => card.columnId === id && card.title.toLowerCase().includes(searchString.toLowerCase())
        )
    );

    return <article className={styles.column}>
        <h2 className={styles.title}>
            <span
                className={styles.icon + ' fa fa-' + icon}
            />
            {title}
        </h2>
        <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
        <CardForm columnId={id} action={action} />
    </article>
}
export default Column;