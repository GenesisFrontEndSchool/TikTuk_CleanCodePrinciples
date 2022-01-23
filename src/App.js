import { Header } from './components/Header/Header';
import './App.css';
import TrendingFeed from './service/TrendingFeed';

function App() {
  return (
    <>
      <Header />
      <TrendingFeed />
    </>
  );
} 

export default App;
