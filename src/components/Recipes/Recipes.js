import "./style.scss";
import { Sidebar } from "../Sidebar/Sidebar";
import { Notification } from "../Notification/Notification";
import { Avatar } from "../Avatar/Avatar";
import { Search } from '../Search/Search';
import { Footer } from '../Footer/Footer';
import { RecipeItem } from '../RecipeItem/RecipeItem';

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
          <div className='content__menu'>
            <button className='content__button'>Добавить свой рецепт</button>
            <Search />
          </div>
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
          <RecipeItem />
          </div>
          <Footer />
          </div>
        </>
    );
  };