

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from "../assets/images/circle.png"
import {upadateCards} from "../state/action-creators"

const MainHeader = () => {
  const dispatch = useDispatch();
  const cardItems = useSelector(state=>state.reducer?.cardItems)
  const [filteredCards, setFilteredCards] = useState(cardItems);

  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleFavourites = ()=>{
    const favorites = cardItems.filter((card) => card.favourite);
    dispatch(upadateCards(favorites));

  }
  

  // Function to handle the search query
  const handleSearch = () => {
    const filtered = cardItems.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // setFilteredCards(filtered);
    dispatch(upadateCards(filtered))
  };
  return (
    <div className='main-header'>
      <div className='container'>
        <div className='main-header__menu'>
          <div className='img'>
            <img alt='' src = {logo} />
          </div>
          <div className='main-header__right'>
            <div className="search">
              <input type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search by title..."className="searchTerm"  />
              <button onClick={handleSearch} type="submit" className="search-btn">
                search
              </button>
            </div>
              <ul className='cart-button'>
                <li onClick={handleFavourites}><Link to="">favourites</Link></li>
                <li><Link to="/cart">cart</Link></li>
              </ul> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
