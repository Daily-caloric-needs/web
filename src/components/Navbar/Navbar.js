import './style.scss';
import { IoPieChartOutline, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { NavItem } from '../NavItem/NavItem';
import { useNavigate } from 'react-router-dom'

export const navItems = [
	{
		name: 'Главная',
		active: true,
		icon: <IoHomeOutline size={30} />
	},
	{
		name: 'Статистика',
		active: false,
		icon: <IoPieChartOutline size={30} />,
	},
	{
		name: 'Настройки',
		active: false,
		icon: <IoSettingsOutline size={30} />,
	},
];

export const Navbar = () => {

	const navigate = useNavigate();
	
	return (
		<ul className="navbar">
			{navItems.map((navItem, idx) => {
				return <NavItem key={idx} navItem={navItem} onClick={()=> {
					navigate(`/${navItem.name}`)
				}}/>;
			})}
		</ul>
	);
};
