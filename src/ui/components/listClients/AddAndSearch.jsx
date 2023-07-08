import useStyles from './AddAndSearch.styles';
import MagnifierIcon from './img/magnifier.png';
import AddClientIcon from './img/add-client.png';
import AvatarIcon from './img/avatar.png';

const AddAndSearch = () => {
   const classes = useStyles();
   return (
      <>
         <div className={classes.wrapper}>
            <p className={classes.logo}>Frasier</p>
            <div className={classes.searchForm}>
               <div className={classes.magnifier}>
                  <img src={MagnifierIcon} alt='magnifierIcon' />
               </div>
               <div className={classes.textAreaWidth}>
                  <textarea className={classes.textArea} placeholder='Buscar'>
                  </textarea>
               </div>
            </div>
            <div>
               <button className={classes.addButton}>
                  <img className={classes.imageAdd} src={AddClientIcon} alt='addClientIcon' />
                  <p>Agregar Cliente</p>
               </button>
            </div>
            <div className={classes.user}>
               <div className={classes.avatar}>
                  <img src={AvatarIcon} alt='avatarIcon' />
               </div>
               <div className={classes.hamburger}>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <div className={classes.userText}>
                  <p className={classes.userName}>Jhon Jacob<br />
                     jhon.jacob@gmail.com</p>
               </div>
            </div>
         </div>
         <div className={classes.hidden}>
            <div className={classes.secondSearchForm}>
               <div className={classes.secondMagnifier}>
                  <img src={MagnifierIcon} alt='magnifierIcon' />
               </div>
               <div className={classes.secondTextArea}>
                  <textarea className={classes.secondTextArea} placeholder='Buscar'>
                  </textarea>
               </div>
            </div>
            <div className={classes.secondButton}>
               <button className={classes.secondAddButton}>
                  <img className={classes.secondImageAdd} src={AddClientIcon} alt='addClientIcon' />
                  <p>Agregar Cliente</p>
               </button>
            </div>
         </div>
      </>
   );
};

export default AddAndSearch;