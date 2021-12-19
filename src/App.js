import { Header } from './components/Header/Header';
import './App.css';
import GetTrendingFeed from './service/getTrendingFeed.api';

function App() {
  return (
    <>
      <Header />
      <GetTrendingFeed />
    </>
  );
} 

export default App;
