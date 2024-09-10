import { MAIN_NAV_LINKS } from "../../consts";
import styles from './MainNavigation.module.css';

interface Props {
  currentPath:string;
}


const MainNavigation = ({currentPath}:Props) => {
  return (
    <nav className={styles.nav}>
      <ul>
      {
        MAIN_NAV_LINKS.map((NavLink, index) => (
          <li key={index}>
            <a className={NavLink.href === currentPath ? styles.active: ""} 
               href={`${NavLink.href}`}>{ NavLink.title }</a>
          </li>
        ))
      }
      </ul>
    </nav>
  );
};

export default MainNavigation;