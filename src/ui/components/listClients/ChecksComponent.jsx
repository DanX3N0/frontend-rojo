import { useState } from 'react';
import useStyles from './ChecksComponent.styles';

const ChecksComponent = props => {
   const classes = useStyles();
   const { tittle, labels } = props;
   const [selected, setSelected] = useState([]);

   const handleChange = (event) => {
      const value = event.target.value;
      const index = selected.indexOf(value);
      if (index === -1) {
         setSelected([...selected, value]);
      } else {
         setSelected(selected.filter((item) => item !== value));
      }
   };
   return (
      <div className={classes.wrapper}>
         <p className={classes.tittle}>{tittle}</p>
         {labels.map((label) => (
            <div className={classes.checks} key={label}>
               <input
                  className={classes.check}
                  type='checkbox'
                  value={label}
                  checked={selected.indexOf(label) !== -1}
                  onChange={handleChange}
               />
               <label style={{ color: selected.indexOf(label) !== -1 ? 'black' : 'gray' }}>{label}</label>
            </div>
         ))}
      </div>
   );
};

export default ChecksComponent;