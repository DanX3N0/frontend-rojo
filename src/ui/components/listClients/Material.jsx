import useStyles from './Material.styles';

const Material = props => {
   const classes = useStyles();
   const { tittle, labels } = props;
   return (
      <div className={classes.wrapper}>
         <p className={classes.tittle}>{tittle}</p>
         <div className={classes.material}>
            {labels.map((label) => (
               <div className={classes.checks}>
                  <input className={classes.check} type='checkbox' />
                  <label>
                     {label}
                  </label>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Material;