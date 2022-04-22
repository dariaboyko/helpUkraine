import classes from "./LinkToSwift.module.css";
import classNames from "classnames";
function LinkToSwift() {
  return (
    <a href="#swift" className={classes.arrowAnim}>
      <div className={classes.arrowSliding}>
        <div className={classes.arrow}></div>
      </div>
      <div className={classNames(classes.arrowSliding, classes.delay1)}>
        <div className={classes.arrow}></div>
      </div>
      <div className={classNames(classes.arrowSliding, classes.delay2)}>
        <div className={classes.arrow}></div>
      </div>
      <div className={classNames(classes.arrowSliding, classes.delay3)}>
        <div className={classes.arrow}></div>
      </div>
    </a>
  );
}
export default LinkToSwift;
