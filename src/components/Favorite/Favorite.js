import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
        <div className={styles.hero}>
           <PageTitle>
               Favorite
            </PageTitle>
            <p className={styles.description}>
                Lorem ipsum
            </p>
        </div>
    )
}
export default About