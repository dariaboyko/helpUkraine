import classes from "./MainInformation.module.css";
import classNames from "classnames";
function MainInformation() {
    return(
  <div>
    <h1 className={classNames(classes.text, classes.title)} >HOW TO HELP UKRAINE</h1>
    <p className={classes.text}>
      Russia has invaded Ukraine – the Shield of Europe. As we are protecting
      the World against the tyranny, it’s high time to demonstrate your support
      of peace and democracy in Ukraine and around the world.
    </p>
  </div>);
}
export default MainInformation;
