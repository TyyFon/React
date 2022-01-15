import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button.js'

const CardForm = props => {
    const [title, setTitle] = useState('');
    const addCard = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
        setTitle('');
    };
           
	return (
        <form className={styles.form} onSubmit={addCard}>
            <input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add Card</Button>
        </form>
	);
};

export default CardForm;