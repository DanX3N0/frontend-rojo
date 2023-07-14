import ListProducts from "./ui/components/ListaProductos/ListProducts";
import Theme from './Theme/Theme';
import TableComponent from './ui/components/listClients/TableComponent';

function App() {
  return (
    <Theme>
      <TableComponent/>
      <ListProducts/>
import Theme from "./Theme/Theme";
import NavMenu from "./ui/components/navMenu/NavMenu";
import FormClient from "./ui/components/formClient/FormClient";
import FormDirect from "./ui/components/formClient/FormDirect";
import FormFact from "./ui/components/formClient/FormFact";


import Form from "./ui/components/formClient/Form";
function App() {
  return (
    <Theme>
      <NavMenu />
      <div style={{ display: 'flex', justifyContent: 'space-between',margin: '20px' }}>
        <Form/>
      </div>

    </Theme>
  );
}

export default App;
