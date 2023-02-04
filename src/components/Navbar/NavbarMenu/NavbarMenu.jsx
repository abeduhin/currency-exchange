import { NavLink } from "react-router-dom";
import items from "./items";
import css from './NavbarMenu.module.css';

const NavbarMenu = () => {

    const getClassName = ({isActive}) => {
        return isActive ? `${css.link} ${css.isActive}` : css.link
    };

    const elements = items.map(({id, text, to}) => (
            <li className={css.item} key={id}>
                <NavLink className={getClassName} to={to} end>{text}</NavLink>
            </li>
        ))
    return (
        <ul className={css.list}>
            {elements}
        </ul>
    )
};

export default NavbarMenu;