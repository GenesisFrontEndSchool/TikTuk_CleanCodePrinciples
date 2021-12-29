import { Header } from './components/Header/Header';
import './App.css';
import GetTrendingFeed from './service/TrendingFeed';

function App() {
  return (
    <>
      <Header />
      <GetTrendingFeed />
    </>
  );
} 

export default App;
