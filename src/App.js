import logo from './logo.svg';
import './App.css';


import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Feedback from './components/Feedback';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Gallery/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
