import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button.js'
import { useDispatch } from 'react-redux';
import { addListAction } from '../../redux/listsRedux.js'

const ListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');    
    const addList = e => {
        e.preventDefault();
        dispatch(addListAction({ title, description }));
        setTitle('');
        setDescription('');
    };   
    return (
        <form className={styles.form} onSubmit={addList}>
            <span className={styles.span}>
                Title:
            </span>
            <input className={styles.input}
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <span className={styles.span}>
                Description:
            </span>
            <input className={styles.input}
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <Button>Add List</Button>
        </form>
    );
};

export default ListForm;