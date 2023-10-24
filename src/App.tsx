import './App.css';
import { Header } from './components/header/Header';
import { Search } from './components/search/Search';
import { Base } from './components/base/Base';
import data from './mock/data.json'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allPosition } from './store/positions/positions-actions';

function App() {
  const dispatch = useDispatch()
  const data_user = data
  useEffect(() => {
    dispatch(allPosition(data_user))
  })
  return <div >
    <Header />
    <div className='container'>
      <Search />
      <Base />
    </div>
  </div>
}

export default App;