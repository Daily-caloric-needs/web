import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './style.scss';

export const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <div className="footer">

      <hr />

      <div className='footer__content'>
        <div className="footer__logo">
          <Logo />
          <h4>Начни питаться полезнее, осознаннее и здоровее!</h4>
        </div>
        <div className="footer__info">
          <div className="footer__info-navigation">
            <h4>Навигация</h4>
            <p onClick={() => navigate("/")}>Главная</p>
            <p onClick={() => navigate("/diary")}>Дневник</p>
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

      <hr />
      
      <div>
        <h4 className="footer__copy">@DAILYCALORICNEEDS 2022</h4>
      </div>
    </div>
  );
};
