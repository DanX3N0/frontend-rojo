import FormClient from './FormClient';
import FormDirect from './FormDirect';
import FormFact from './FormFact';
import PreferenceMark from './PrefeMark';
import useForm from './usesForm.styles';


const Form = () =>{
    const classes = useForm();

    return(
        <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.column}>
            <div className={classes.row}>
             <div className={classes.square}>
                <FormClient  />
             </div>
             <div className={classes.square}>
                <FormFact />
             </div>
            </div>
            <div className={classes.row}>
               <FormDirect />
               <div className={classes.square}></div>
               <PreferenceMark /> 
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default  Form;
