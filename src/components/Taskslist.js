import '../styles/Taskslist.scss';
import { useState } from 'react';
import trash from '../images/trash.png'


function Tasklist() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', isChecked: false },
    { id: 2, name: 'Item 2', isChecked: false },
    { id: 3, name: 'Item 3', isChecked: false },
    { id: 4, name: 'Item 4', isChecked: false },
  ]);

  let inputText = document.getElementById('new-task-input');

  const removeItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  }

  const addItem = (name) => {
    if (name === '') {
      alert('Please enter a task');
    } else {
      const updatedList = [...items, { id: items.length + 1, name }];
      setItems(updatedList);
      inputText.value = '';
    }
  }

  const handleCheck = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, isChecked: !item.isChecked } : item));
  };


  return (
    <div className="taskslist">
      {items.map((item) => (
        <div className="task" key={item.id}>
          <div className="task__checkbox-label">
            <div className="task__checkbox">
              <input type="checkbox" id={item.id} name={item.id} onChange={() => handleCheck(item.id)}></input>
            </div>
            <label for={item.id} className={ item.isChecked ? 'label-checked' : ''}>
              <div className={`task__custom-checkbox ${item.isChecked ? 'checked': ''}`}></div>
              {item.name}
            </label>
          </div>
          <img onClick={() => removeItem(item.id)} src={trash} alt=""></img>
        </div>
      ))}

      <div className="new-task">
        <div className="new-task__container">
          <input type="text" id="new-task-input" name="new-task-input" placeholder="Add new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button id="new-task-button" onClick={() => { addItem(inputValue); setInputValue(''); }}>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tasklist;