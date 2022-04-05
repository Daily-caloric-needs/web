import { daysOfWeek } from '../../constants';
import { IoChevronDownSharp } from 'react-icons/io5';
import './style.scss';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const CustomTypography = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.primary.main,
}));

export const Date = () => {
  const currentDayOfWeek = daysOfWeek[new window.Date().getDay()];
  const currentDate = new window.Date().getDate();

  return (
    <div className="date">
      <CustomTypography variant="h4" className="date__day">
        {currentDayOfWeek}, {currentDate}
        <IoChevronDownSharp fontSize={25} />
      </CustomTypography>
    </div>
  );
};
