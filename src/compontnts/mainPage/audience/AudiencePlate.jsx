
import {useInView} from 'react-intersection-observer';
import { useEffect, useState } from 'react';


function AudiencePlate(props) {


    const [active, setActive] = useState(false)

    const {ref, inView, entry} = useInView({
        threshold: 0,
        triggerOnce: true,
        trackVisibility: true,
        delay: (props.itemDelay)
    })

    useEffect(() => {
        if(inView) {
            setActive(true)
        }
    }, [inView])

    return (
        <div ref={ref} className={`audience-plate__item ${active ? 'audience-plate__item--active' : ''}`}>
                   <img src={`${props.img}`} alt="" className="audience-plate__img" />
                    <p className="audience-plate__title">{props.title}</p>
                    </div>
    );
  }
  
  export default AudiencePlate;
  