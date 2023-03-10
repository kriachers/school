
import { useEffect, useState } from "react";

import './App.css';
import Header from './compontnts/header/Header'
import Banner from './compontnts/mainPage/banner/Banner'
import Audience from './compontnts/mainPage/audience/Audience'
import Promo from './compontnts/mainPage/promo/Promo'
import Process from './compontnts/mainPage/process/Process'
import Likes from './compontnts/mainPage/likes/Likes'
import Rewiews from './compontnts/mainPage/reviews/Reviews'
import Accordion from './compontnts/mainPage/accordion/Accordion'
import BackToTopButton from './compontnts/ux/BackToTopButton'
import Footer from "./compontnts/footer/Footer";

function App() {

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setBackToTopButton(true)
        } else {
            setBackToTopButton(false)
        }
    })
}, [])


  return (
    <div className="App">

      <div className='bg-gradient'>
        <Header></Header>
        <Banner></Banner>
      </div>
      <Audience></Audience>
      <Promo img={'promo/girl.svg'} title={`Первый месяц обучения от 5${'\u00A0'}250 руб`} descr={'Не знаете подойдет ли вашему ребенку обучение онлайн? Попробуйте первый месяц со скидкой 50%!'}></Promo>
     <Process></Process>
     <Likes></Likes>
     <Rewiews></Rewiews>
     <Accordion></Accordion>
     <Footer></Footer>
     {backToTopButton ? <BackToTopButton/> : '' }
    
    </div>
  );
}

export default App;
