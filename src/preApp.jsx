import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommend/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState, useEffect } from 'react'
import products from './db/data'

function preApp() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("");

// ---------- input Filter ----------------- //
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter((product) => product.
  title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
);

// ---------- Radio Filter ----------------- //
const handleChange = (event) => {
  setSelectedCategory(event.target.value)
};

// ---------- Buttons Filter ----------------- //
const handleClick = (event) => {
  setSelectedCategory(event.target.value)
}

function filteredData(products, selected, query) {
  let filteredProducts = products

  // Filtering Input Items
  if (query) {
    filteredProducts = filteredItems
  }

  // Selected Filter
  if (selected) {
    filteredProducts = filteredProducts.filter(({ 
      category, color, company, newPrice, title}) => 
        category === selected || 
        color === selected ||
        company === selected || 
        newPrice === selected || 
        title === selected
      ); 
  };

  return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice}) => (
    <Card key={Math.random()}
     img={img}
     title={title}
     star={star}
     reviews={reviews}
     prevPrice={prevPrice}
     newPrice={newPrice}
     />
  ));
}

useEffect(() => {
  filteredData(products, selectedCategory, query)
},[products, selectedCategory, query])


  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation />
      <Recommended />
      <Products />
      
    </div>
  )
}

export default preApp
