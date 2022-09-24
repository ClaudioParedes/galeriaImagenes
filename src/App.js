import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (

    <div>
  <div>  
    <Header title='Galería de Imágenes en React' />
  </div>

<div>
    <Card title = 'Titulo Tarjeta 1' descript = 'Descripción de Tarjeta 1' source='http://placekitten.com/g/250/200'/>
    <Card title = 'Titulo Tarjeta 2' descript = 'Descripción de Tarjeta 2' source='http://placekitten.com/g/200/200'/>
    <Card title = 'Titulo Tarjeta 3' descript = 'Descripción de Tarjeta 3' source='http://placekitten.com/g/270/200'/>
    <Card title = 'Titulo Tarjeta 4' descript = 'Descripción de Tarjeta 4' source='http://placekitten.com/g/280/200'/>
</div>
  <div>
   <Footer/>
   </div>
   </div>

  );
}

export default App;
