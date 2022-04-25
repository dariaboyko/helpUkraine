import classes from "./Checks.module.css";
function ForeignerCryptoDonations() {
  return (
    <div className={classes.foreignerCryptoChecksText}>
      <p className={classes.foreignerCryptoTitle}>Donate with BITCOIN WALLET</p>
      <p>Number: bc1qkd5az2ml7dk5j5h672yhxmhmxe9tuf97j39fm6</p>
      <p>
        Donate with ETHEREUM (eth, usdt, usdc)
        <br></br>Wallet address: 0xa1b1bbB8070Df245081 0b8eB2425D543cfCeF79b
      </p>
      <p>
        Donate with TRC20 (tether)<br></br>Wallet address:
        TX9aNri16bSxVYi6oMnKDj5RMKAMBXWzon
      </p>
      <p>
        Donate with Solana (sol)<br></br>Wallet address:
        8icxpGYCoR8SRKqLYsSarcAjBjBPuXAuHkeJjJx5ju7a
      </p>
    </div>
  );
}
export default ForeignerCryptoDonations;
