import useStyles from './ChecksComponent.styles';

const ChecksComponent = props => {
   const classes = useStyles();
   const { tittle, labels } = props;
   return (
      <div className={classes.wrapper}>
         <p className={classes.tittle}>{tittle}</p>
            {labels.map((label) => (
               <div className={classes.checks}>
                  <input className={classes.check} type='checkbox' />
                  <label>
                     {label}
                  </label>
               </div>
            ))}
      </div>
   );
};

export default ChecksComponent;