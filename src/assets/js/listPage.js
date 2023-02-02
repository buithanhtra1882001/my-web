import { MdOutlineAddShoppingCart } from "react-icons/md";
import pageItems from "../../containers/Home/HomeBody/data1.json"
import { Link } from "react-router-dom";

var EventEmitter = require('events')

export const ee = new EventEmitter()

ee.emit('message', 'hello world')

const ListPage = () => {
  const handleSelectPage = (id) => {
  ee.emit('message', id)
  }
  return (
    <>
      {pageItems.map(item =>
          <div className="itemCategory" onClick={()=> handleSelectPage(item.id)}>
              {item.name}
          </div>
      )}    
    </>
  )
}

export default ListPage