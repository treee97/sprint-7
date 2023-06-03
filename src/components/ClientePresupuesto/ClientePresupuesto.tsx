import { ClienteContainer, ClienteItem } from "../../utils";

// type clienteProps = {
//   nombreCliente: string;
//   data: string;
//   nombrePresupuesto: string;
//   servicios: {
//  guardamos cada estado aqui? , isChecked, languages, pages, total.
// };
//   precioTotal: number; o lo guardamos por separado?
// };

//Filtros no pueden ir aqui o se renderizaran cada vez
const ClientePresupuesto = () => {
  return (
    <>
      <ClienteContainer>
        <ClienteItem>
          <div>Nombre:</div>
          <div>Marc</div>
        </ClienteItem>
        <ClienteItem>
          <div>Nombre de Presupuesto:</div>
          <div>Graficcsd qwjdi wqidoiou</div>
        </ClienteItem>
        <ClienteItem>
          <div>Fecha de admision:</div>
          <div>18 abril 2023</div>
        </ClienteItem>
        <hr />
        <ClienteItem>
          <div>Servicios solicitados:</div>
          <div>website (3paginas, 2idiomas), SEO, Google Ads </div>
        </ClienteItem>
        <ClienteItem>
          <div>Total a recibir:</div>
          <div>€1283</div>
        </ClienteItem>
      </ClienteContainer>
    </>
  );
};

export default ClientePresupuesto;
