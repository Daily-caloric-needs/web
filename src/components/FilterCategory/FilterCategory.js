import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipes } from '../../store/Recipes/selectors';

export const FilterCategory = () => {

   const recipesList = useSelector(selectRecipes);

   return (
      <div>
      </div>
   )
}