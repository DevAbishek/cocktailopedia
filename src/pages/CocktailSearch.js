import { useState, useEffect } from 'react';
import Cocktail from '../components/Cocktail';
import { FaSearch } from 'react-icons/fa';
import './CocktailSearch.css';

const CocktailSearch = () => {

    const [Cocktails, setCocktails] = useState([]);
    const [SearchValue, setSearchValue] = useState('')

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(res => res.json())
            .then(data => {
                setCocktails(data.drinks)
                console.log(data.drinks)
            })
            .catch(error => console.log(error));
    }, [])

    function changeHandler(e) {
        e.preventDefault();
        setSearchValue(e.target.value);
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${SearchValue}`
        fetch(url).then(res => res.json()).then(data => setCocktails(data.drinks)).catch(error => console.log(error));
    }

    function submitHandler(e) {
        e.preventDefault();
    }

    return (
        <>
            <div className='cs-container'>
                <h1>Search for a Cocktail</h1>
                <div className='searchbar'>
                    <input value={SearchValue} type="text" placeholder='Search...' onChange={changeHandler} />
                    <button className='sc-button' onSubmit={submitHandler}>Search</button>
                </div>
            </div>
            {Cocktails ?
                Cocktails.map((elem) => {
                    return (
                        <Cocktail {...elem} key={elem.idDrink} />
                    )
                }) :
                <h1>No results found!</h1>
            }
            
        </>
    )
}

export default CocktailSearch