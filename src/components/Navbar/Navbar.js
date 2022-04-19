import './style.scss';
import { IoPieChartOutline, IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { NavItem } from '../NavItem/NavItem';

export const navItems = [
	{
		name: 'Главная',
		active: false,
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
	return (
		<ul className="navbar">
			{navItems.map((navItem, idx) => {
				return (
					<NavItem key={idx} navItem={navItem}/>
					)
			})}
		</ul>
	)
}