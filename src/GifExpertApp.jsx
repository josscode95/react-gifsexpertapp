import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState([]);
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory 
        setCategories={setCategories}
      />
      <hr />
      <ol>
        {
          categories.map(categorie => (
            <GifGrid 
              key={categorie}
              category={categorie} 
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp