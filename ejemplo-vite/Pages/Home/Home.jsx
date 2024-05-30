import {importProductsFromMock} from '../../src/utils/importProducts';



export const Home = () => {

  return (
    <>
    <div>Home</div>
    <button onClick={importProductsFromMock}>Agregar Productos desde Mock</button>
    </>
  );
};
