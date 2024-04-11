import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Code1 from './components/Code1';
import Code2 from './components/Code2';
import Code3 from './components/Code3';
import Code4 from './components/Code4';
import Code5 from './components/Code5';

function App() {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/puzzle1' element={<Code1 />}/>
        <Route path='/puzzle2' element={<Code2 />}/>
         <Route path='/puzzle3' element={<Code3 />}/>
        <Route path='/puzzle4' element={<Code4 />}/>
        <Route path='/puzzle5' element={<Code5 />}/>
      </Routes>
    </div>
  )
}

export default App
