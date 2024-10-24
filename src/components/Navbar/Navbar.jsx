import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    id: 1,
    title: "Hompage",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 1,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 1,
    title: "Posts",
    path: "/posts",
  },
];

const Navbar = () => {
  return (
    <section>
      <header>
        <nav>
          <h2>Marusoft</h2>
          <ul className={styles.navLists}>
            {navItems.map((item) => (
              <li className={styles.navList} key={item.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </section>
  );
};
export default Navbar;
