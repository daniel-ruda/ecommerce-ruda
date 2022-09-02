import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
  return (
    <div className="App-main">
      <p>{greeting}</p>
      <ItemCount stock={5}/>
    </div>
  )
}

export default ItemListContainer;
