import NavbarMenu from './NavbarMenu/NavbarMenu';
import css from './Navbar.module.css';

const Navbar = () => {

    return (
        <nav className={css.navbar}>
            <div className={css.container}>
                <NavbarMenu />
            </div>
        </nav>
    )
};

export default Navbar;
