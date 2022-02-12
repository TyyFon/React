import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
//import { getAllColumns } from '../../utils/getAllColumns.js';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';

const List = (
	) => {
	const listId = 1
	const columns = useSelector(getColumnsByList);
	const listData = useSelector(state => getListById(state, listId));
	
	
	return (
		<div className={styles.list}>
		<header className={styles.header}>
			<h2 className={styles.title}>
				{ listData.title }
				<span>
					soon!
				</span>
			</h2>
		</header>
		<p className={styles.description}>
			{ listData.description }
		</p>
		<section className={styles.columns}>
			{columns.map(column =>
			<Column
				key={column.id}
				{...column}  />
			)}
		</section>
		<ColumnForm />
		</div>
	);
};

export default List;