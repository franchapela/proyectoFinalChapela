import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar color='red' text='test'/>
      <ItemListContainer greeting='Bienvenido'></ItemListContainer>
    </div>
    
  );
}

export default App;
