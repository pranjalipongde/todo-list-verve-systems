import { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, setItemList] = useState([]);

  const onChangeHandler = (e) => {
    // stores the latest input value which user type
    setCurrentItem(e.target.value);  
  };

  // currentItem should be update in itemList
  const addItemToList = () => {
    setItemList([...itemList, {item:currentItem, key: Date.now()}]);
    setCurrentItem("");
  }


  return (
    <div className="App">
        <header className='App-header'>
          <p>TODO</p>
          <div className='wrapper'>
              
              <div className='input-wrapper'>
                <input placeholder="add item" value={currentItem} onChange={onChangeHandler}/>
                <button onClick={addItemToList}>+</button>
              </div>
              <List itemList={itemList} setItemList={setItemList}/>
          </div>
        </header>
     </div>
  );
}

export default App;
