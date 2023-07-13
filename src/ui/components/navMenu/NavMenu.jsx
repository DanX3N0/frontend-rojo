import useStyles from './NavMenu.styles';
const NavMenu = () => {
  const classes = useStyles();
  return (
    <nav className={classes.wrapper}>
      <ul>
        <li>
          <a href='/'>Inicio</a>
        </li>
        <li>
          <a href='/'>Pedidos</a>
        </li>
        <li>
          <a href='/'>Clientes</a>
        </li>
        <li>
          <a href='/'>Promociones</a>
        </li>
        <li>
          <a href='/'>Opiniones</a>
        </li>
        <li>
          <a href='/'>Configuracion</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
