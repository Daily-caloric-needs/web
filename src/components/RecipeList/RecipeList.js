import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../store/Recipes/actions';
import { selectRecipes } from '../../store/Recipes/selectors';
import "./style.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMemo } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const RecipeList = () => {
    const dispatch = useDispatch();
    const recipesList = useSelector(selectRecipes);

    const [selectedCategory, setSelectedCategory] = useState();

    const requestRecipes = async () => {
        dispatch(getRecipes());
    };

    useEffect(() => {
        requestRecipes();
    }, []);

    const getFiltreCategory = () => {
        if (!selectedCategory || selectedCategory === "Все рецепты" || selectedCategory === "Популярные") {
            return recipesList;
        }
        return recipesList.filter((recipe) => recipe.recipe.categories === selectedCategory);
    }

    const filtredCategory = useMemo(getFiltreCategory, [selectedCategory, recipesList]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    return (
        <>
            <div className="container__category animate__animated animate__pulse">
                <FormControl fullWidth>
                    <InputLabel>Категория</InputLabel>
                    <Select onChange={handleCategoryChange} label='Категория'>
                        <MenuItem getOptionDisabled value="Все рецепты">Все рецепты</MenuItem>
                        <MenuItem value="Популярные">Популярные</MenuItem>
                        <MenuItem value="Первые блюда">Первые блюда</MenuItem>
                        <MenuItem value="Вторые блюда">Вторые блюда</MenuItem>
                        <MenuItem value="Закуски">Закуски</MenuItem>
                        <MenuItem value="Выпечка">Выпечка</MenuItem>
                        <MenuItem value="Напитки">Напитки</MenuItem>
                        <MenuItem value="Десерты">Десерты</MenuItem>
                    </Select>
                </FormControl>
            </div>
                <ul className="recipesUL">
                    {selectedCategory ? filtredCategory.map((recipe) => (
                        <li key={recipe.id} className="recipesList">
                            <Accordion className='recipes'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className='recipes__item'>
                                        <div className='recipes__item__info'>
                                            <h2>{recipe.recipe.name}</h2>
                                            <ul>
                                                {recipe.productList.map((product) => (
                                                    <li key={product.product[0].id}>{product.product[0].name} - {product.modifier * 100}г</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='recipes__item__calories'>
                                            <p>{recipe.productList.reduce(function (sum, product) {
                                                return sum = Math.round(sum + (+product.product[0].calories * product.modifier))
                                            }, 0)} Ккал</p>
                                            <span>{recipe.recipe.categories}</span>
                                        </div>
                                        <div className='recipes__item__photo'></div>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {recipe.recipe.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    )) : recipesList.map((recipe) => (
                        <li key={recipe.id} className="recipesList">
                            <Accordion className='recipes'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className='recipes__item'>
                                        <div className='recipes__item__info'>
                                            <h2>{recipe.recipe.name}</h2>
                                            <ul>
                                                {recipe.productList.map((product) => (
                                                    <li key={product.product[0].id}>{product.product[0].name} - {product.modifier * 100}г</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='recipes__item__calories'>
                                            <p>{recipe.productList.reduce(function (sum, product) {
                                                return sum = Math.round(sum + (+product.product[0].calories * product.modifier))
                                            }, 0)} Ккал</p>
                                            <span>{recipe.recipe.categories}</span>
                                        </div>
                                        <div className='recipes__item__photo'></div>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {recipe.recipe.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    ))}
                </ul>
        </>
    )
}