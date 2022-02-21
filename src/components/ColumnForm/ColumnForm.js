import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button.js'
import { useDispatch } from 'react-redux';
import { addColumnAction } from '../../redux/columnsRedux.js'

const ColumnForm = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const listId = props.listId;
    const addColumn = e => {
        e.preventDefault();
        dispatch(addColumnAction({ title, icon, listId}));
        setTitle('');
        setIcon('');
    };   
    return (
        <form className={styles.form} onSubmit={addColumn}>
            <span className={styles.span}>
                Title:
            </span>
            <input className={styles.input}
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <span className={styles.span}>
                Icon:
            </span>
            <input className={styles.input}
                type="text"
                value={icon}
                onChange={e => setIcon(e.target.value)}
            />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;