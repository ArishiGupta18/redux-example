import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';

import 'C:/Users/HP/Downloads/redux-crud-example/redux-crud-example/src/style.css'
const ItemList = ({ items, addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem = {
        id: Date.now(),
        name: newItemName,
      };

      addItem(newItem);
      setNewItemName('');
    }
  };

  return (
    <div>
      <h1>React Redux Task 1</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Input text"
          />
        </label>

        <button type="button" onClick={handleAddItem}>
          Submit
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Serial no.</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {items.slice().reverse().map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { addItem })(ItemList);
