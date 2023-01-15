import {useInView} from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function SubTile(props) {

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
        <h2 ref={ref} className={`${props.class} sub-title ${active ? 'sub-title--active' : ''}`}>{props.title}</h2>
    );
  }
  
  export default SubTile;
  