import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Make sure this path is correct
import PokemonInfo from './pages/PokemonInfo'; // Make sure this path is correct

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemon/:name' element={<PokemonInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
