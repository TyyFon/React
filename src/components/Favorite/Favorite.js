import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import Card from './../Card/Card.js'
import { getFilteredFavoriteCards } from '../../redux/store';


const Favorite = () => {
    const favoriteCards = useSelector((state) => getFilteredFavoriteCards(state));
    return (
        <div className={styles.hero}>
           <PageTitle>
               Favorite
            </PageTitle>
            <ul className={styles.cards}>
                {favoriteCards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        isFavorite={card.isFavorite}
                    />
                ))}
            </ul>              
        </div>
    )
}
           
export default Favorite
// const Favorite = () => {
// const favoriteCards = useSelector((state) => getFilteredFavoriteCards(state));    const favoriteCards = useSelector((state) => getFilteredFavoriteCards(state));
//     return (
//       <>
//         <PageTitle>Favorite</PageTitle>
//         <ul className={styles.cards}>
//           {favoriteCards.map((card) => (
//             <Card
//               key={card.id}
//               title={card.title}
//               isFavorite={card.isFavorite}
//               cardId={card.id}
//             />
//           ))}
//         </ul>
//       </>
//     );
//   };
  