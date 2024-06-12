import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState(null);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleSortClick = () => {
    setDropdown(!dropdown);
  };

  const handleFilterClick = (productType) => {
    setSelectedProductType(productType);
    setDropdown(false);
  };

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1 - 12</span> out of 54 Products</p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} onClick={handleSortClick} alt="" />
          {dropdown && (
            <div className="shopcategory-sort-dropdown">
              <p onClick={() => handleFilterClick('Jacket')}>Jacket</p>
              <p onClick={() => handleFilterClick('Shirt')}>Shirt</p>
              <p onClick={() => handleFilterClick('Jeans')}>Jeans</p>
              <p onClick={() => handleFilterClick('T-Shirt')}>T Shirt</p>
              <p onClick={() => handleFilterClick('Top')}>Top</p>
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {allproducts
          .filter(item => props.category === item.category && (!selectedProductType || item.product_type === selectedProductType))
          .map((item, i) => (
            <Item
              id={item.id}
              key={i}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      <div className="shopcategory-loadmore">
        <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;
