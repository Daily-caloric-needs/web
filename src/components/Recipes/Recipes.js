import "./style.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { Notification } from "../Notification/Notification";
import { Avatar } from "../Avatar/Avatar";
import { Search } from '../Search/Search';
import { Footer } from '../Footer/Footer';

export const Recipes = () => {
    return (
        <>
        <div className='container'>
        <div className="content">
        <div className="content__header">
            <Sidebar />
            <Notification />
            <Avatar />
          </div>
          <Search />
          <button className='content__button'>Добавить свой рецепт</button>
          <div className='content__category'>
            <button>Все рецепты</button>
            <button>Популярные</button>
            <button>Первые блюда</button>
            <button>Вторые блюда</button>
            <button>Закуски</button>
            <button>Выпечка</button>
            <button>Напитки</button>
            <button>Десерты</button>
          </div>
          <div className='recipes'>
          <section className='recipes__item'>
            <div className='recipes__item__info'>
                <h2>Манная каша</h2>
            <ul>
              <li>Молоко - <span>300мл</span></li>
              <li>Вода - <span>100мл</span></li>
              <li>Крупа манная - <span>50г</span></li>
              <li>Сахар - <span>5г</span></li>
              <li>Соль - <span>1г</span></li>
              <li>Масло сливочное - <span>10г</span></li>
            </ul>
            </div>
            <div className='recipes__item__calories'>
              <p>63Ккал</p>
              <span>Второе блюдо</span>
              <button>Посмотреть рецепт</button>
            </div>
            <div className='recipes__item__photo'></div>
          </section>
          </div>
          </div>
          <Footer />
          </div>
        </>
    );
  };