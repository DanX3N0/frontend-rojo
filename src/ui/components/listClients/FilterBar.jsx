import useStyles from './FilterBar.styles';
import ChecksComponent from './ChecksComponent';
import PriceComponent from './PriceComponent';
import FilterIcon from './img/filter-icon.png';
import Material from './Material';

const FilterBar = () => {
   const data = {
      category: {
         tittle: 'Categoria',
         labels: [
            'Mujer',
            'Hombre',
            'Todos',
         ],
      },
      material: {
         tittle: 'Material',
         labels: [
            'Metals',
            'Plastic',
            'Glass',
            'Ceramic',
            'Minerals',
         ],
      },
      stock: {
         tittle: 'Stock',
         labels: [
            'Disponible',
            'Agotado',
         ],
      },
   };

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