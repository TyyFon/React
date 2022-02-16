import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardToFavoriteAction } from '../../redux/store';
import clsx from 'clsx';


const Card = ({
    isFavorite,
    title
}) => {
    const dispatch = useDispatch();
    const toggleFavorite = (e) => {
        e.preventDefault();
        dispatch(
            toggleCardToFavoriteAction({ isFavorite: isFavorite })
        );
    };

    return (
        <li className={styles.card}>
            {title}
            <button onClick={toggleFavorite}>
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