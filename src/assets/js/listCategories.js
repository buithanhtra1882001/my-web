import { MdOutlineAddShoppingCart } from "react-icons/md";
import categoryItems from "../../containers/Home/HomeBody/data.json"
import { Link } from "react-router-dom";

var EventEmitter = require('events')

export const ee = new EventEmitter()

ee.emit('message', 'hello world')

const ListCategories = () => {
  const handleSelectCategory = (id) => {
  ee.emit('message', id)
  }
  return (
    <>
      {categoryItems.map(item =>
          <div className="itemCategory" onClick={()=> handleSelectCategory(item.id)}>
              {item.name}
          </div>
      )}    
      <div className="itemCategory">
        {/* <Link to="/product" className="link">Tất cả</Link> */}
        <a href="http://localhost:3000/product" className="link">Tất cả</a>
      </div>
    </>
  )
}

export default ListCategories