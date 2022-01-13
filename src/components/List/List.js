import styles from './List.module.scss';
import Column from '../Column/Column.js';
import { useState } from 'react';
import { useEffect } from 'react';
import shortid from 'shortid';

const List = () => {
    
    const [columns, setColumns] = useState([
        { id: 1, title: 'Books', icon: 'book' },
        { id: 2, title: 'Movies', icon: 'film' },
        { id: 3, title: 'Games', icon: 'gamepad' }
    ]);
  
    const handleSubmit = e => {
        e.preventDefault();
        setColumns([...columns, { id: shortid(), title: value }]);
    };
    
    const [value, setValue] = useState(' ');
    /*useEffect(() => {

        setTimeout(() => {
              setColumns([...columns, { id: 4, title: 'Test column'}]);
        }, 2000);

  }, []);*/

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do<span>soon</span></h1>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <div className={styles.columns}>
                {columns.map(columns => <Column key={columns.id} title={columns.title} icon={columns.icon} />)}
            </div>
            <form onSubmit={handleSubmit}>
			    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
			    <button>Add column</button>
            </form>
        </div>
    )
}


export default List;