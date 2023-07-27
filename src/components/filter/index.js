

import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { upadateCards } from '../../state/action-creators';

const Filter = () => {
  const [filters , setFilters] = useState([])

  const allCards = useSelector(state=> state.reducer.allCards);
  const dispatch = useDispatch();
  
useEffect(()=>{
  const filteredCardItems = allCards?.filter(item => {
    // Checking whether all selected filters are present in the item's tags array
    return filters?.every(filter => item.tags.includes(filter));
  });
  dispatch(upadateCards(filteredCardItems))
},[filters])


const handleFilterChange = (filter) => {
  setFilters(prevFilters => {
    // Creating a new object based on previous filters
    const updatedFilters = [ ...prevFilters ];
     // Checking if the filter is already selected, removing it, otherwise, adding it
    if (updatedFilters?.includes(filter)) {
      updatedFilters?.splice(updatedFilters.indexOf(filter), 1);
    } else {
      updatedFilters?.push(filter);
    }

    return updatedFilters;
  });
};


  return (
    <div>
      <h2>Filter Receipies:</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet delectus ea.</p>
      <div className='filters'>
        <h2>By Season:</h2>
        <ul>
            <li>
            <input
          type="checkbox"
          checked={filters?.includes("Autumn")}
          onChange={() => handleFilterChange("Autumn")}
        />
                <label htmlFor="automn">Automn</label>
            </li>
            <li>
            <input
          type="checkbox"
          checked={filters?.includes("Spring")}
          onChange={() => handleFilterChange("Spring")}
        />
                <label htmlFor="automn">Spring</label>
            </li>
            <li>
            <input
          type="checkbox"
          checked={filters?.includes("Winter")}
          onChange={() => handleFilterChange("Winter")}
        />
                <label htmlFor="automn">Winter</label>
            </li>
           
        </ul>
      </div>

      <div className='filters'>
        <h2>By Dietary Preference:</h2>

        <ul>
            <li>
            <input
          type="checkbox"
          checked={filters?.includes("Egg free")}
          onChange={() => handleFilterChange("Egg free")}
        />
                <label htmlFor="automn">Egg Free</label>
            </li>
            <li>
            <input
          type="checkbox"
          checked={filters?.includes("Healthy")}
          onChange={() => handleFilterChange("Healthy")}
        />
                <label htmlFor="automn">Healthy</label>
            </li>
          
        </ul>
      </div>

      <div className='filters'>
        <h2>By Meal:</h2>

        <ul>
            <li>
            <input
          type="checkbox"
          checked={filters?.includes("Breakfast")}
          onChange={() => handleFilterChange("Breakfast")}
        />
                <label htmlFor="automn">Breakfast</label>
            </li>
            <li>
            <input
          type="checkbox"
          checked={filters?.includes("Dinner")}
          onChange={() => handleFilterChange("Dinner")}
        />
                <label htmlFor="automn">Dinner</label>
            </li>
           
        </ul>
      </div>
    </div>
  )
}

export default Filter
