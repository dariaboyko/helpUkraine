import classes from "./LinkToCrypto.module.css";
import classNames from "classnames";
function LinkToCrypto() {
  return (
    <a href="#crypto" className={classes.arrowAnim}>
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
export default LinkToCrypto;
