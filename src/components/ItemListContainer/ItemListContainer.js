import AddButton from "../AddButton/AddButton";
export default function ItemListContainer ({greeting}) {
    return(
        <div className="itemlist-container">
            <h1>{greeting}</h1>
            <div className="item">
            <AddButton/>
            </div>
            
        </div>
        
    )
}