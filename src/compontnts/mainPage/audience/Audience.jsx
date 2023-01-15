import AudiencePlate from './AudiencePlate'

import {useInView} from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const audienceData = [
    {
        title: 'Для тех, кто хочет получать знания',
        img: './audience/knowleges.svg'
    },
    {
        title: 'Для путешественников',
        img: './audience/travelers.svg'
    },
    {
        title: 'Для семейного обучения',
        img: './audience/family.svg'
    },
    {
        title: 'Для спортсменов',
        img: './audience/sport.svg'
    },
    {
        title: 'Для проживающих за рубежом',
        img: './audience/abroad.svg'
    },
]
function Audience() {

    const [active, setActive] = useState(false)

    const {ref, inView, entry} = useInView({
        threshold: 0,
        triggerOnce: true
    })

    useEffect(() => {
        if(inView) {
            setActive(true)
        }
    }, [inView])



    return (
        <div className="container audience">
        <h2 ref={ref} className={`audience__title ${active ? 'audience__title--active' : ''}`}>Кому подходит онлайн образование?</h2>
        <div className="audience__plate">
        {
            audienceData.map((item, index) => {
                const itemDelay = (index + 1) * 500;
                return (
                    <AudiencePlate itemDelay={itemDelay} img={item.img} title={item.title} ></AudiencePlate>
                   )
            })
        }
        </div>
        </div>
    )
  }
  
  export default Audience;
  