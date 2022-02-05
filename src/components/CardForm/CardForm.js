import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button.js'
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const columnId = props.columnId;
    const dispatch = useDispatch();
    const addCard = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { title, columnId } })
        setTitle('');
    };

    return (
        <form className={styles.form} onSubmit={addCard}>
            <input
                className={styles.input}
                type="text" value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Button>Add Card</Button>
        </form>
    );
};

export default CardForm;