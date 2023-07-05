import useStyles from './AddAndSearch.styles';
import Lupa from './img/lupa.png';
import AddClient from './img/add-client.png';
import Avatar from './img/avatar.png';

const AddAndSearch = () => {
   const classes = useStyles();
   return (
      <>
         <div className={classes.wrapper}>
            <p className={classes.logo}>Frasier</p>
            <div className={classes.searchForm}>
               <div className={classes.lupa}>
                  <img src={Lupa} alt='lupa' />
               </div>
               <div className={classes.textAreaWidth}>
                  <textarea className={classes.textArea} placeholder='Buscar'>
                  </textarea>
               </div>
            </div>
            <div>
               <button className={classes.addButton}>
                  <img className={classes.imgAdd} src={AddClient} alt='add-client' />
                  <p>Agregar Cliente</p>
               </button>
            </div>
            <div className={classes.user}>
               <div className={classes.avatar}>
                  <img src={Avatar} alt='avatar' />
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
            <div className={classes.searchForm2}>
               <div className={classes.lupa2}>
                  <img src={Lupa} alt='lupa' />
               </div>
               <div className={classes.textAreaWidth2}>
                  <textarea className={classes.textArea2} placeholder='Buscar'>
                  </textarea>
               </div>
            </div>
            <div className={classes.buttonHidden}>
               <button className={classes.addButton2}>
                  <img className={classes.imgAdd2} src={AddClient} alt='add-client' />
                  <p>Agregar Cliente</p>
               </button>
            </div>
         </div>
      </>
   );
};

export default AddAndSearch;