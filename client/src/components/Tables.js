import React from 'react'
import TableRow from './TableRow'
import useRollTableData from '../hooks/useRollTableData';

const Tables = () => {
  const { categoryItems, setContext } = useRollTableData();

  return (
    <div>
      <button onClick={setContext}>Monsters</button>
      <button onClick={setContext}>Magic Items</button>
      <button onClick={setContext}>NPCs</button>
      <label for='roll-length'>Table Length:</label>
      <input id='roll-length' type='number' value={10}></input>

      {categoryItems !== undefined && categoryItems.map((item) => <TableRow key={item.id} name={item.name} />)}
    </div>
  )
}

export default Tables