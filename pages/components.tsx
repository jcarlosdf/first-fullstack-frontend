import Atom from '../components/Atom';
import FormSearch from '../components/atom/FormSearch';
import AtomInput from '../components/AtomInput';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Layout } from '../components/Layout';

const Components = () => {
  return (
    <div>
      <div>
        <h1>Atom</h1>
        <Atom />
      </div>
      ;
      <div>
        <h1>AtomInputs</h1>
        <AtomInput placeholder='Marcas y tiendas' />
      </div>
      <div>
        <h1>Footer</h1>
        <Footer />
      </div>
      <div>
        <h1>FormSearch</h1>
        <FormSearch />
      </div>
      <div>
        <h1>Header</h1>
        <Header />
      </div>
      <div>
        <h1>Layout</h1>
        <Layout />
      </div>
    </div>
  );
};

export default Components;