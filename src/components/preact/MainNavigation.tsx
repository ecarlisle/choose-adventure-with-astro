import { h } from 'preact';
import { MAIN_NAV_LINKS } from "../../consts";
import styles from './MainNavigation.module.css';

interface NavLink {
  id: number;
  title: string;
  href: string;
}

interface Props {
  currentPath:string;
}


const MainNavigation = (props:Props) => {
  return (
    <nav className={styles.nav}>
      <ul>
      {
        MAIN_NAV_LINKS.map((NavLink, index) => (
          <li key={index}>
            <a className={NavLink.href === props.currentPath ? "active": ""} href={`${NavLink.href}`}>{ NavLink.title }</a>
          </li>
        ))
      }
      </ul>
    </nav>
  );
};

export default MainNavigation;
