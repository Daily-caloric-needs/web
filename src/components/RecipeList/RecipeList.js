import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../store/Recipes/actions';
import { selectRecipes } from '../../store/Recipes/selectors';
import "./style.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const RecipeList = () => {
    const dispatch = useDispatch();
    const recipesList = useSelector(selectRecipes);

    const requestRecipes = async () => {
        dispatch(getRecipes());
    };

    useEffect( () =>{
        requestRecipes();
        console.log(recipesList);

    }, []);
    
    return (
        <>
        <ul>
        {recipesList.map((recipe) => (
            <li key={recipe.id} className="recipesList">
            <Accordion className='recipes'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='recipes__item'>
            <div className='recipes__item__info'>
                <h2>{ recipe.recipe.name }</h2>
            <ul>
                {recipe.productList.map((product) => (
                    <li key={product.product[0].id}>{product.product[0].name} - { Math.round(product.product[0].calories * product.modifier) }Ккал</li>
                ))}
            </ul>
            </div>
            <div className='recipes__item__calories'>
              <p>{recipe.productList.reduce(function(sum, product){
	return sum = Math.round(sum+(+product.product[0].calories * product.modifier))},0) } Ккал</p>
              <span>{ recipe.recipe.categories }</span>
            </div>
            <div className='recipes__item__photo'></div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          { recipe.recipe.description }
          </Typography>
        </AccordionDetails>
      </Accordion>
            </li>
        ))}
        </ul>
        
        </>
    )
}