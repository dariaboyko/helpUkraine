import classes from "./UkrainianCrypto.module.css";
function UkrainianCrypto(){
    return (
      <div className={classes.cryptoWrapper}>
        <p className={classes.title}>Допомога криптовалютами</p>
        <p>
          Donate with BITCOIN WALLET
          <br></br>Number: bc1qkd5az2ml7dk5j5h672yhxmhmxe9tuf97j39fm6
        </p>
        <p>
          Donate with ETHEREUM (eth, usdt, usdc)
          <br></br>Wallet address: 0xa1b1bbB8070Df24508 10b8eB2425D543cfCeF79b
        </p>
        <p>
          Donate with TRC20 (tether)
          <br></br>Wallet address: TX9aNri16bSxVYi6oMnKDj5RMKAMBXWzon
        </p>
      </div>
    );
}
export default UkrainianCrypto;