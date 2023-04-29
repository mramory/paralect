import './App.css'
import { Filter } from './components/Filter/Filter'
import Header from './components/Header/Header'
import { Search } from './components/Search/Search'
import { Vacancies } from './components/Vacancies/Vacancies'

function App() {
  
  return (
    <>
      <Header />
      <Filter />
      <Search />
      <Vacancies />
    </>
  )
}

export default App
