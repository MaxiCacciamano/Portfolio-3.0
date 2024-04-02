import 'react'
import './App.css'
import {
  Routes,
  Route
} from "react-router-dom";
import { Home } from './componenets/Home/Home';
import { Cv } from './componenets/Resum/Cv';
import { Form } from './componenets/Form/Form';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Resume" element={<Cv/>}/>
      <Route path="/Form" element={<Form/>}/>
    </Routes>
    </>
  )
}

export default App
