import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import Logo from '../Drawable/my-logo.svg?react';

const routes = [
  { path: '/', text: 'Home' },
  { path: '/profile', text: 'Profile' },
  { path: '/projects', text: 'Projects' },
];

function Navigation() {
  // Whether the mobile menu is open. On md screens and up the links are always shown.
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sticky top-0 z-[1020] h-full">
      <nav className="flex flex-wrap items-center justify-between px-3 py-2 md:flex-nowrap">
        <NavLink to="/" onClick={closeMenu} className="mr-4 py-[5px] text-xl/[1.5]" aria-label="Home">
          <Logo className={`${styles.logo} inline`} />
        </NavLink>

        <button
          type="button"
          className={`${styles.toggle} rounded-md px-3 py-1 text-xl leading-none md:hidden`}
          aria-controls="responsive-navbar-nav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`${styles.hamburger} fa fa-bars`}></span>
        </button>

        <div
          id="responsive-navbar-nav"
          className={`${menuOpen ? 'block' : 'hidden'} basis-full md:flex md:basis-auto md:justify-end`}
        >
          <div className={`${styles.nav} flex flex-col md:flex-row`}>
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                onClick={closeMenu}
                className="mx-2 block py-2 text-base md:px-2"
              >
                <span>{'> '}</span>
                {route.text}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
