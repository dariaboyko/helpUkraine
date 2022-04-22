import classes from "./Checks.module.css";
function UkrainianChecks(){
    return (
      <div className={classes.checksText}>
        <p>Джерело</p>
        <p className={classes.title}>Підримати армію:</p>
        <div className={classes.ibanWrapper}>
          <div className={classes.iban}>
            РАХУНОК В ОЩАДБАНКУ IBAN: UA223226690000026007300905964
            <br></br>ЄДРПОУ:39696398
          </div>
          <div className={classes.iban}>
            РАХУНОК В ПРИВАТБАНКУ​​ IBAN: UA383052990000026005015017860
          </div>
        </div>
        <div className={classes.description}>
          Отримувач: Благодійна Організація «Міжнародний благодійний фонд
          «Повернись живим» Призначення платежу: Благодійна пожертва
          військовослужбовцям.
        </div>
      </div>
    );
}
export default UkrainianChecks;