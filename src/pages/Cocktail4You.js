import { useState, useEffect} from 'react';
import Cocktail from '../components/Cocktail';

const Cocktail4U = () => {

  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        setCocktail(data.drinks);
      })
      .catch(error => console.log(error))
  },[])


  return (
    <>
    <Cocktail {...cocktail[0]} />
    </>
  )
}

export default Cocktail4U