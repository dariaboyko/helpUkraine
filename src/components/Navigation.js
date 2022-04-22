import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
function MainNavigation() {
  return (
    <nav className={classes.navigation}>
      <Link to="/forUkrainians" className={classes.link}>
        If you are from Ukraine
      </Link>
      <Link to="/forForeigners" className={classes.link}>
        If you are not from Ukraine
      </Link>
    </nav>
  );
}
export default MainNavigation;
