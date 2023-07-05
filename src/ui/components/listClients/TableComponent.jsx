import ListClients from './ListClients';
import NavMenu from '../navMenu/NavMenu';
import AddAndSearch from './AddAndSearch';
import FilterBar from './FilterBar';
import useStyles from './TableComponent.styles';

function App() {
   const classes = useStyles();
   return (
      <>
         <AddAndSearch />
         <div className={classes.wrapper}>
            <NavMenu />
            <div className={classes.hiden}>
               <FilterBar />
            </div>
            <ListClients />
            <div className={classes.hiden2}>
               <FilterBar />
            </div>
         </div>
      </>
   );
}

export default App;
