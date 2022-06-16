import { useNavigate } from 'react-router-dom';
import { Avatar } from "../Avatar/Avatar";
import { Notification } from "../Notification/Notification";
import calories from "../../img/calories.png";
import recipe1 from "../../img/recipe1.jpg";
import recipe2 from "../../img/recipe_2.png";
import recipe3 from "../../img/recipe_3.png";
import "./style.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { Slider } from "../Slider/Slider";
import { useSelector } from "react-redux";
import { selectUserData } from "../../store/UserData/selectors";
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CaloriesCalculator } from '../CaloriesCalculator/CaloriesCalculator';
import { Footer } from '../Footer/Footer';
import { MenuBurger } from '../MenuBurger/MenuBurger';
import 'animate.css';
import { selectRecipes } from '../../store/Recipes/selectors';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Home = () => {
  const navigate = useNavigate();
  const userData = useSelector(selectUserData());
  const [modal, setModal] = useState(false);
  const recipesList = useSelector(selectRecipes);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && (
        <Modal showModal={modal} closeModal={closeModal}>
          <CaloriesCalculator setModal={setModal} />
        </Modal>
      )}

      <div className='container'>
        <div className="content__home">
          <div className="content__nav-button">
            <div className="content__nav-button-burger">
              <MenuBurger />
            </div>
            <div className="content__nav-button-icons">
              <Notification />
              <Avatar />
            </div>
          </div>
          <div className="header">

            <div className="header__left">
              <div className="header__text">
                <p className="animate__animated animate__pulse">
                  Добро пожаловать! <br />
                  Дневник питания - это проект для управления образом жизни. С нами
                  вы начнёте питаться полезнее, осознаннее и здоровее
                </p>
                {!userData && <button onClick={() => navigate("/registration")} className="button__reg">Зарегистрироваться</button>}
              </div>
            </div>
            <div className="header__user">
            </div>
            <Sidebar />
          </div>

          {!userData &&
            <div className="info">
              <ul>
                <p>Если вас беспокоят вопросы:</p>
                <li>Почему я не худею?</li>
                <li>Когда на прессе будут кубики?</li>
                <li>Чего бы полезненького съесть?</li>
                <li>Как пить больше воды?</li>
                <li>Что сегодня приготовить?</li>
              </ul>
              <button onClick={() => navigate("/registration")} className="button__reg">Регистрируйтесь</button>
            </div>
          }

          <Slider className="slider" />
          <div className="info">
            <ul>
              <p>За 9 минут в день вы сможете:</p>
              <li>
                настроить норму потребления калорий в соответствии со своими целями
              </li>
              <li>понять, почему не получается сбросить или набрать вес</li>
              <li>
                питаться полезно и разнообразно, как рекомендуют диетологи и
                нутрициологи
              </li>
              <li>пить больше воды, что важно для всех систем организма</li>
              <li>найти интересный рецепт, если не знаете, что приготовить</li>
              <li>позаботиться о своем здоровье и внешнем виде</li>
            </ul>

            {!userData ?
              <button className="button__reg" onClick={() => navigate("/registration")}>Хочу здоровое тело</button> :
              <button className="header__button" onClick={() => setModal(true)}>Рассчитать норму калорий!</button>
            }
          </div>

          <div className="cards"></div>

          {!userData &&
            <div className="calories">
              <div className="calories__img">
                <img src={calories} alt="продукты на 100 килокалорий" />
              </div>
              <div className="calories__info">
                <p>
                  Уже сейчас вы можете воспользоваться калькулятором и узнать свою
                  норму калорий, а также посчитать, сколько энергии и воды потребляете
                  за день.
                </p>
                <button className="header__button" onClick={() => setModal(true)}>Рассчитать норму калорий!</button>
                <p>
                  После регистрации вам откроется доступ к сохранению личных данных и
                  отчетам. Если записывать приемы пищи каждый день, вы увидите
                  прогресс и сможете достичь цели.
                </p>
              </div>
            </div>
          }

          <div className="recipes">
            <p>
              Обязательно посмотрите базу рецептов и, если захотите поделиться,
              добавьте свой рецепт.
            </p>
            <h3>Популярные рецепты:</h3>
            <div className="recipes__items">
              <ul>
                {recipesList.slice(0, 3).map((recipe) => (
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};