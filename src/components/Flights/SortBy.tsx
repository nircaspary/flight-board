import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores';

const SortBy = () => {
  const { app } = useStore();

  return (
    <div className='sort-by-container'>
      <label htmlFor='sortBy'>
        <b>Sort By:</b>
      </label>
      <select name='sortBy' id='sortBy' onChange={(e) => app.setSortBy(e.target.value)}>
        <option value='actualTime'>Actual Time</option>
        <option value='gate'>gate</option>
      </select>
    </div>
  );
};

export default observer(SortBy);
