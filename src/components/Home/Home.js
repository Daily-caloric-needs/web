import { Avatar } from "../Avatar/Avatar";
import { Notification } from "../Notification/Notification";
import calories from "../../img/calories.png";
import { recipe1 } from "../../img/mental";
import recipe2 from "../../img/recipe_2.png";
import recipe3 from "../../img/recipe_3.png";
import "./style.scss";
import { Sidebar } from "../Sidebar/Sidebar";

export const Home = () => {
  return (
    <div className="content__home">
      <div className="header">
        <div className="header__left">
          <div className="header__text">
            <p>
              Добро пожаловать! <br />
              Дневник питания - это проект для управления образом жизни. С нами
              вы начнёте питаться полезнее, осознаннее и здоровее
            </p>
            <button className="button__reg">Зарегистрироваться</button>
          </div>
        </div>
        <div className="header__user">
          <Sidebar />
          <Notification />
          <Avatar />
        </div>
      </div>

      <div className="info">
        <div className="info__container">
          <div className="info__left">
            <ul>
              <p>Если вас беспокоят вопросы:</p>
              <li>Почему я не худею?</li>
              <li>Когда на прессе будут кубики?</li>
              <li>Чего бы полезненького съесть?</li>
              <li>Как пить больше воды?</li>
              <li>Что сегодня приготовить?</li>
            </ul>
          </div>
          <div className="info__right">
            <ul>
              <p>Почему вы захотите остаться?</p>
              <p>За 9 минут в день вы сможете:</p>
              <li>
                настроить норму потребления калорий в соответствии со своими
                целями
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
          </div>
        </div>
        <button className="button__reg">Регистрируйся!</button>
      </div>

      <div className="cards"></div>

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
          <button className="header__button">Рассчитать норму калорий!</button>
          <p>
            После регистрации вам откроется доступ к сохранению личных данных и
            отчетам. Если записывать приемы пищи каждый день, вы увидите
            прогресс и сможете достичь цели.
          </p>
        </div>
      </div>

      <div className="recipes">
        <p>
          Обязательно посмотрите базу рецептов и, если захотите поделиться,
          добавьте свой рецепт.
        </p>
        <h3>Популярные рецепты:</h3>
        <div className="recipes__items">
          <img src={recipe1} alt="рецепт1" />
          <img src={recipe2} alt="рецепт2" />
          <img src={recipe3} alt="рецепт3" />
        </div>
      </div>
    </div>
  );
};
