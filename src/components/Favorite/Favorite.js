import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
        <div clasName={styles.hero}>
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