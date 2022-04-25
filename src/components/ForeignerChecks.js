import classes from "./Checks.module.css";
import Logo from "./Logo";
function ForeignerChecks() {
  return (
    <div className={classes.foreignerChecksText}>
      <p>Source</p>
      <h3 className={classes.foreignerSwiftTitle}>Donate with SWIFT</h3>
      <p className={classes.leftText}>
        Company Name:<br></br> CO "INTERNATIONAL CHARITABLE FOUNDATION "COME
        BACK ALIVE"<br></br> Office address: 32, Bohdana Hmelnytskoho St.,
        office 41, Kyiv
      </p>
      <div className={classes.foreignerChecksGrid}>
        <p>
          IBAN Code (Euro):<br></br> UA093052990000026004025029786
        </p>
        <p>
          IBAN Code (US Dollar): <br></br>UA173052990000026009035028620
        </p>
        <p className={classes.privatBank}>
          Name of the bank: <br></br>JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR.,
          KYIV, 01001, UKRAINE
        </p>
        <p>
          Bank SWIFT Code:<br></br> PBANUA2XXXX
        </p>
        <p className={classes.purpose}>
          ​Purpose of payment: <br></br>Charitable donation
        </p>
      </div>
      <a
        className={classes.link}
        href="https://pay.fondy.eu/merchants/56b94a99005dd8b4122d8d336bf1dabf/default/index.html?button=dc75627e73000f3b6fb87c83db2fc64767fe1b63"
      >
        Link to donate
      </a>
      <Logo />
    </div>
  );
}
export default ForeignerChecks;
