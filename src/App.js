import ListProducts from "./ui/components/ListaProductos/ListProducts";
import Theme from './Theme/Theme';
import TableComponent from './ui/components/listClients/TableComponent';
import NavMenu from "./ui/components/navMenu/NavMenu";
import FormClient from "./ui/components/formClient/FormClient";
import FormDirect from "./ui/components/formClient/FormDirect";
import FormFact from "./ui/components/formClient/FormFact";
import Theme from './Theme/Theme';
import NavMenu from './ui/components/navMenu/NavMenu';
import Form from './ui/components/formClient/Form';

import InfoFacSend from "./ui/components/infoFacSend/InfoFacSend";
import SendInitialOrder from "./ui/components/sendInitialOrder/SendInitialOrder";
import OptSend from "./ui/components/optSend/OptSend";
import ConfirmOrder from "./ui/components/confirmOrder/ConfirmOrder";

function App() {
  return (
    <Theme>
      /*<TableComponent/>
      <ListProducts/>
      <NavMenu />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Form/>
      </div>
      <OpinionDetailEdit/>*/
      <SendInitialOrder />
      <OptSend />
      <InfoFacSend />
      <ConfirmOrder />
    </Theme>
  );
}

export default App;
