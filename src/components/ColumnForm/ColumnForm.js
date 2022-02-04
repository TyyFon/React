import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button.js'
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';


const ColumnForm = props => {
    const dispatch = useDispatch();
    // const columns = useSelector(state => state.columns);
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const addColumn = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        setTitle('');
        setIcon('');
    };

	return (
        <form className={styles.form} onSubmit={addColumn}>
            <span className={styles.span}>Title:</span> <input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.span}>Icon:</span> <input className={styles.input} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;