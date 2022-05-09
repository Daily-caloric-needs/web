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
import { Logo } from "../Logo/Logo"

export const Home = () => {
  const navigate = useNavigate();
  const userData = useSelector(selectUserData());

  return (
    <div className="content__home">
      <div className="content__nav-button">
        <Notification />
        <Avatar />
      </div>
      <div className="header">
        <div className="header__left">
          <div className="header__text">
            <p>
              Добро пожаловать! <br />
              Дневник питания - это проект для управления образом жизни. С нами
              вы начнёте питаться полезнее, осознаннее и здоровее
            </p>
            {!userData && <button onClick={() => navigate("/registration")} className="button__reg">Зарегистрироваться</button>}
          </div>
        </div>
        <div className="header__user">
          <Sidebar />
        </div>
      </div>

      <div className="info">
        <ul>
          <p>Если вас беспокоят вопросы:</p>
          <li>Почему я не худею?</li>
          <li>Когда на прессе будут кубики?</li>
          <li>Чего бы полезненького съесть?</li>
          <li>Как пить больше воды?</li>
          <li>Что сегодня приготовить?</li>
        </ul>
        {!userData && <button onClick={() => navigate("/registration")} className="button__reg">Регистрируйтесь</button>}
      </div>
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

        <button className="button__reg">Хочу здоровое тело</button>
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
      <hr />
      <div className="footer">
        <div className="footer__logo">
          <Logo />
          <h4>Начни питаться полезнее, осознаннее и здоровее!</h4>
        </div>
        <div className="footer__info">
          <div className="footer__info-navigation">
            <h4>Навигация</h4>
            <p onClick={() => navigate("/")}>Главная</p>
            <p onClick={() => navigate("/statistics")}>Дневник</p>
            <p onClick={() => navigate("/recipes")}>Рецепты</p>
            <p onClick={() => navigate("/profile")}>Личный кабинет</p>
          </div>
          <div className="footer__info-social">
            <h4>Добавляйся</h4>
            <a href="www.instagram.com">Instagram</a><br />
            <a href="www.facebook.com">Facebook</a><br />
            <a href="www.pinterest.com">Pinterest</a><br />
            <a href="www.telegram.com">Telegram</a><br />
          </div>
          <div className="footer__info-support">
            <h4>Поддержка</h4>
            <p>Всегда будем рады помочь при необходимости</p>
            <a href="mailto:dailycaloricneeds@gmail.com">dailycaloricneeds@gmail.com</a><br />
            <a href="tel:+71234567890">+71234567890</a>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h4 className="footer__copy">@DAILYCALORICNEEDS 2022</h4>
      </div>
    </div>
  );
};