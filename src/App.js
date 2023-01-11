import logo from './logo.svg';
import './App.css';
import Header from './compontnts/header/Header'
import Banner from './compontnts/mainPage/banner/Banner'

function App() {
  return (
    <div className="App">

      <div className='bg-gradient'>
      <Header></Header>
      <Banner></Banner>
     </div>
    </div>
  );
}

export default App;
