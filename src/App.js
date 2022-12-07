import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// const notes = [
//   {
//     id: '1',
//     name: 'uno',
//     desc: 'numero'
//   },
//   {
//     id: '2',
//     name: 'dos',
//     desc: 'numero'
//   }
// ]
// const [show, setShow] = useState(true)
// const getNotes = () => {
//   return new Promise((resolve) =>{
//     resolve(notes)
//   },3000)
// }
function App() {


//   getNotes().then(Response =>{
//     console.log(Response)
//   })
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
