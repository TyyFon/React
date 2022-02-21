import styles from './Column.module.scss';
import CardForm from './../CardForm/CardForm.js';
import Card from './../Card/Card.js'
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux.js';

const Column = ({
    id, 
    icon, 
    title,
    action
}) => {
    const cards = useSelector(state => getFilteredCards(state, id));
    return <article className={styles.column}>
        <h2 className={styles.title}>
            <span
                className={styles.icon + ' fa fa-' + icon}
            />
            {title}
        </h2>
        <ul className={styles.cards}>
            {cards.map(card => <Card 
                key={card.id} 
                title={card.title} 
                isFavorite={card.isFavorite} 
                id={card.id} />)}
        </ul>
        <CardForm columnId={id} action={action} />
    </article>
}

export default Column;