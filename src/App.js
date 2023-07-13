import ListProducts from "./ui/components/ListaProductos/ListProducts";
import Theme from './Theme/Theme';
import TableComponent from './ui/components/listClients/TableComponent';

function App() {
  return (
    <Theme>
      <TableComponent/>
      <ListProducts/>
    </Theme>
  );
}

export default App;
