import useStyles from "./PriceComponent.styles";
const PriceComponent = () => {
   const classes = useStyles();
   return (
      <div className={classes.wrapper}>
         <p className={classes.tittle}>Precio</p>
         <div className={classes.pricesContainer}>
            <p className={classes.priceLeft}>$100</p>
            <p className={classes.priceRight}>$5000</p>
         </div>
         <input type="range" min="100" max="5000" value="1000"></input>
      </div>
   )
};

export default PriceComponent;