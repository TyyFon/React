import styles from './Card.module.scss';
import { getFilteredCards } from '../../redux/store';
import clsx from 'clsx';

const Card = ({
    title,
    isFavorite
}) => {
    return (
        <li className={styles.card}>
            {title}
            <button onClick={getFilteredCards}>
                    <span
                        className={clsx(
                        styles.favorite,
                        'fa fa-star-o',
                        isFavorite && styles.isFavorite
                        )}
                    />
            </button>
        </li>
    );
};

export default Card;