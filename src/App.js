import './App.css';
import Navbar from './pages/Navbar';
import MovingBg from './movingBG/MovingBg';
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'
import Home from './mainPages/Home';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Continent from './pages/continents/Continent';
import { ContextCountryPovider } from './ContextCountry';
import Country from './pages/country/Country';
import Comparaison from './pages/comparaison/Comparaison';
import QuizPage from './flagQuiz/QuizPage';


function App() {
  const client = new QueryClient()
  return (
    <div className="App">
      <ContextCountryPovider>
      <QueryClientProvider client={client}>
          <Router>
             <>
              <MovingBg/>
              <Navbar/> 
             </>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/continent' element={<Continent/>}/>
                <Route path='/country/:countryName' element={<Country/>}/>
                <Route path='/comparaison' element={<Comparaison/>}/>
                <Route path='/quiz' element={<QuizPage/>}/>
              </Routes>
          </Router>
      </QueryClientProvider>
      </ContextCountryPovider>
    </div>
  );
}

export default App;
