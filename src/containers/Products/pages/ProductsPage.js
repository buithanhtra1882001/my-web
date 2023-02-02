import React, { useEffect, useState } from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { listAge } from '../../../assets/js/listAge';
import { listPriceItem } from '../../../assets/js/listPriceItems';
import { listType } from '../../../assets/js/listType';
import ListProducts  from '../../../assets/js/listProducts';
// import { listCategory } from '../../Home/HomeBody/data';
import './ProductsPage.scss'
import ListCategories from '../../../assets/js/listCategories';
import Pagination from '../../../components/Pagination';
import queryString from 'query-string';
import ListPage from '../../../assets/js/listPage';

function ProductsPage() {
  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })
  function handlePageChange(newPage) {
    console.log("new page:", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters)
        const requestUrl = `http://localhost:3000/product/${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({responseJSON});

        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list:", error.message);
      }
    }
    console.log("POST list effect");
    fetchPostList();
  }, [filters])
  

  return (
    <div className="productContainer">
      <div className="leftContainer">
        <div className="path">
          <div className="pathHome">
            Trang chủ
          </div>
          /
          <div className="pathProduct">
            Sản phẩm 
          </div>
        </div>
        <div className="category">
          <div className="title">
            Danh mục
          </div>
          <ListCategories/>
        </div>
        <div className="price">
          <div className="title">
            Giá
          </div>
          <div className="itemPrice">
            {listPriceItem.map((item) => {
              return <div>
                {item}
              </div>
            })}
          </div>
        </div>

        {/* <div className="age">
          <div className="title">
            Độ tuổi
          </div>
          <div className="itemAge">
            {listAge.map((item) => {
              return <div >
                {item}
              </div>
            })}
          </div>
        </div>
        <div className="type">
          <div className="title">
            Thể loại
          </div>
          <div className="itemType">
          {listType.map((item) => {
              return <div>
                {item}
              </div>
            })}
          </div>
        </div> */}
        
      </div>
      <div className="rightContainer">
        <div className="top">
          <div className="arrange">
            Sắp xếp theo: 
          </div>
          <div className="arrangeButton">
            Mới nhất
          </div>
        </div>
        <div className="products">
          <ListProducts />
        </div>
        {/* <Pagination 
          pagination={pagination}
          onPageChange={handlePageChange}
        /> */}
      </div>
    </div>
  )
}

export default ProductsPage