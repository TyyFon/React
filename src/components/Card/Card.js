import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardToFavoriteAction, removeCardAction } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = ({
    isFavorite,
    title,
    id,    
}) => {
    const dispatch = useDispatch();
    const toggleFavorite = (e) => {
        e.preventDefault();
        dispatch(
            toggleCardToFavoriteAction({ id: id })
        );
    };
    const handleRemoveCard = (e) => {
        e.preventDefault();
        dispatch(
            removeCardAction({ id})
        )
    }
    return (
        <li className={styles.card}>
            {title}
            <div className={styles.wrapper}>
                <button onClick={toggleFavorite}>
                        <span
                            className={clsx(
                                styles.favorite,
                                'fa fa-star-o',
                                isFavorite && styles.isFavorite
                            )}
                        />
                </button>
                <button onClick={handleRemoveCard}>
                    <span
                        className={
                            'fa fa-trash-o'
                        }
                    />
                </button>
            </div>
        </li>
    );
};

export default Card;