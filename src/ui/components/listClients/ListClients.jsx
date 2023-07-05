import Pencil from './img/icon-edit.png';
import Delete from './img/icon-delete.png';
import useStyles from './ListClients.styles';
import data from './mock-users.json';

const ListClients = () => {
   const classes = useStyles();
   const users = data;

   return (
      <div className={classes.wrapper}>
         <div className={classes.tittleTable}>
            <h3>Clientes / Lista de Clientes</h3>
         </div>
         <table className={classes.table}>
            <thead className={classes.tableHead}>
               <tr>
                  <th>
                     ID
                  </th>
                  <th>
                     Nombre
                  </th>
                  <th>
                     Apellido
                  </th>
                  <th>
                     Correo Electronico
                  </th>
                  <th>
                     Telefono
                  </th>
                  <th>
                     Accion
                  </th>
               </tr>
            </thead>
            <tbody className={classes.tableBody}>
               {users.map((user) => (
                  <tr className={classes.bodyRow}>
                     <td>
                        {user.id}
                     </td>
                     <td>
                        {user.name}
                     </td>
                     <td>
                        {user.lastName}
                     </td>
                     <td>
                        {user.email}
                     </td>
                     <td>
                        {user.number}
                     </td>
                     <td>
                        <div className={classes.buttons}>
                           <button className={classes.history}>
                              Historial
                           </button>
                           <button className={classes.editAndDelete}>
                              <img src={Pencil} alt='icon-edit' />
                           </button>
                           <button className={classes.editAndDelete}>
                              <img src={Delete} alt='icon-delete' />
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ListClients;