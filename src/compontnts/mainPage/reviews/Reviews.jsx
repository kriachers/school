import { useState } from "react";

const rewiewsData = [
    {
        author: 'Анна Смирнова',
        parentOf: 'родитель Максима',
        descr: 'Банальные, но неопровержимые выводы, а также непосредственные участники технического прогресса набирают популярность среди определенных слоев населения, а значит, должны быть ассоциативно распределены по отраслям. Имеется спорная точка зрения, гласящая примерно следующее: диаграммы.'
    },
    {
        author: 'Маша Петрова',
        parentOf: 'родитель Оли',
        descr: 'Прекрасное обучение, отличная образовательная программа. Ребенок прекрасно усваивает знания.'
    },
    {
        author: 'Маша Иванова',
        parentOf: 'родитель Кати',
        descr: 'Банальные, но неопровержимые выводы, а также непосредственные участники технического прогресса набирают популярность среди определенных слоев населения, а значит, должны быть ассоциативно распределены по отраслям. Имеется спорная точка зрения, гласящая примерно следующее: диаграммы.'
    },
    
]

function Rewiews() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [fading, setFading] = useState(false)
    // const [emersion, setEmersion] = useState(false)

    function goSliderRight () {
        setFading(true)
        setTimeout(goRight, 300)
    }

    function goRight () {
        if (currentSlide == (rewiewsData.length - 1)) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
        setFading(false)
    }

    function goSliderLeft () {
        setFading(true)
        setTimeout(goLeft, 300)
        
    }

    function goLeft () {
        if (currentSlide == 0) {
            setCurrentSlide(rewiewsData.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
        setFading(false)
    }
    

    return ( 
        <div className="container container-bottom">
            <h2 className="rewiews__title">Отзывы родителей о "Школе Будущего Online"</h2>

            <div className="rewiews__wrapper">
                <div className="rewiews-wrapper__spot" >
                <img src="./rewiews/spot.svg" alt="" className="rewiews-spot__img" />
                </div>
                <div className="rewiews__tile">
                        <img className="rewiew-tile__bg" src="./rewiews/message.svg" alt="" />
                        <div className={`rewiews-tile__content flex ${fading ? 'fading' : ''}`}>
                                
                                <div className="rewiews-tile__wrapper">
                                    <h4 className="rewiews-tile-wrapper__author">{rewiewsData[currentSlide].author}</h4>
                                    <h4 className="rewiews-tile-wrapper__parentOf">{rewiewsData[currentSlide].parentOf}</h4>
                                </div>
                                <p className="rewiews-tile__descr">{rewiewsData[currentSlide].descr}</p>
                        </div>
                </div>
            </div>

            <div className="rewiews__nav">
                <img onClick={goSliderLeft} className="rewiews-nav__arrow rewiews-nav__arrow--left" src="./rewiews/left.svg" alt="" />
                <img onClick={goSliderRight} className="rewiews-nav__arrow rewiews-nav__arrow--right" src="./rewiews/left.svg" alt="" />
            </div>
        
        </div>
    )
  }
  
  export default Rewiews;
  