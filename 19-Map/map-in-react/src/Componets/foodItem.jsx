import Items from "./Items";
function FoodItems({ items }) {
    return (
    <>
    <ul className="list-group">
      {
        items.map((name)=>{ 
         return <Items fitems = {name} />
      })
      }
    </ul>
    </>
    );
}
export default FoodItems;