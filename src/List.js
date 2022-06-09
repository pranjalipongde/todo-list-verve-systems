import "./List.css";

function List ({itemList, setItemList}) {

    // for deleting the items from the list
    const deleteItemFromList = key => {
        const newList = itemList.filter(itemObj => {
            return itemObj.key !== key;
        });
        setItemList(newList);
    }

    return (
        <div>
            {itemList.map( itemObj => {
                return ( 
                    <div key={itemObj.key} className="item">
                        <p>{itemObj.item}</p>
                        <button onClick={() => deleteItemFromList(itemObj.key)}>x</button>
                    </div>
                );
            })}
        </div>
    );
}

export default List;