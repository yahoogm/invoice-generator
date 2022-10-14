import './App.css';
import {React} from 'react'
import Header from './components/header/header';
import Bisa from './components/header/Bisa';
import Susah from './components/header/Susah';
import Time from './components/header/Time';
import { InvoiceProvider } from './hooks/context';


function App() {
  return <InvoiceProvider>
  <div className='container'>
    <div className='flex flex-row'>
      <div className='flex flex-col w-full'>
        <Header />
        <Bisa />
        <Susah />
      </div>
      <Time />
    </div>
    </div>
    
  </InvoiceProvider>;
}

export default App;
