import classes from "./ContentWrapper.module.css";
function ContentWrapper(props){
    return<div className={classes.wrapper}>{props.children}</div>;
}
export default ContentWrapper;