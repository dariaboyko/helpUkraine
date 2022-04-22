import SupportArmy from "./SupportArmy";
import SupportCrew from "./SupportCrew";
import classes from './UkrainianSupport.module.css';
function UkrainianSupport(){
    return (
      <div className={classes.text}>
        <p>Підтримати команду фонду Повернись живим</p>
        <p className={classes.supportArmyText}>Підтримати армію з карти будь-якого банку​</p>
        <SupportCrew className={classes.supportCrew} />
        <SupportArmy className={classes.supportArmy} />
      </div>
    );
}
export default UkrainianSupport;