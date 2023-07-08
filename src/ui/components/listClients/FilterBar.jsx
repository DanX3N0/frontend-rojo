import useStyles from './FilterBar.styles';
import ChecksComponent from './ChecksComponent';
import PriceComponent from './PriceComponent';
import FilterIcon from './img/filter-icon.png';
import Material from './Material';
import data from '../../../mockedData/mock-filter-data.json';

const FilterBar = () => {

   const classes = useStyles();
   return (
      <div className={classes.wrapper}>
         <div className={classes.tittle}>
            <p>Filtrar</p>
            <img className={classes.filter} src={FilterIcon} alt='filter-icon' />
         </div>
         <div className={classes.checks}>
            <ChecksComponent tittle={data.category.tittle} labels={data.category.labels} />
            <Material tittle={data.material.tittle} labels={data.material.labels} />
         </div>
         <div className={classes.checks}>
            <ChecksComponent tittle={data.stock.tittle} labels={data.stock.labels} />
            <PriceComponent />
         </div>
      </div>
   )
};

export default FilterBar;