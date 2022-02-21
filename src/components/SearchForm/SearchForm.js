import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { updateSearchingAction } from '../../redux/searchStringRedux.js'

const SearchForm = () => {
    const [searchString, setSearch] = useState(useSelector(state => state.searchString));
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchingAction( searchString ));
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput
                placeholder="Serch..."
                value={searchString}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;