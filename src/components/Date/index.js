import { daysOfWeek } from '../../constants';
import { IoChevronDownSharp } from 'react-icons/io5';
import './style.scss';

export const Date = () => {
  const currentDayOfWeek = daysOfWeek[new window.Date().getDay()];
  const currentDate = new window.Date().getDate();

  return (
    <div className="date">
      <h3 className="date__day">
        {currentDayOfWeek}, {currentDate}
        <IoChevronDownSharp fontSize={25} />
      </h3>
    </div>
  );
};
