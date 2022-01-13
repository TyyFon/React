import styles from './Container/container.module.scss'

const Container = props => {
    return (
        <div class={styles.container}>
            {props.children}
        </div>
    )
}

export default Container