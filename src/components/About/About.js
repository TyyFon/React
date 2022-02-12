import styles from './About.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
        <div className={styles.hero}>
           <PageTitle>
               About
            </PageTitle>
            <p className={styles.description}>
                Lorem ipsum
            </p>
        </div>
    )
}
export default About