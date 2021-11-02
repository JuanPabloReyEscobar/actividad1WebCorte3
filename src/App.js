import './App.css';
import { PinLayout } from './components/main';
import Header from './components/Header/Header';
import HeaderMobile from './components/Header/HeaderMobile';
import Footer from './components/Footer/Footer';
const App = () => {
  if(window.innerWidth > 375){
    return (
    
      <div>
        <Header/>
        <PinLayout/>
     </div>
    );
  }else{
    return (
    
      <div>
        <HeaderMobile/>
        <PinLayout/>
        <Footer/>
      </div>
    );
  }  
};

export default App;
