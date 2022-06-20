import React from 'react';
import './Cocktail.css'

const Cocktail = ({ idDrink, strDrink, strDrinkThumb, strInstructions, strAlcoholic, strCategory }) => {
    return (
        <>
            <div className='c-container' key={idDrink}>
                <img className='c-image' src={strDrinkThumb} alt={strDrink} />
                <div className='c-subcontainer'>
                    <h2 className='c-title'>Name: {strDrink}</h2>
                    {/* <h3 className='c-instructions'>Instructions: {strInstructions}</h3> */}
                    <h3 className='c-alcohol'>Alcohol: {strAlcoholic}</h3>
                    <h3 className='c-category'>Category: {strCategory}</h3>
                </div>
            </div>
        </>
    )
}

export default Cocktail