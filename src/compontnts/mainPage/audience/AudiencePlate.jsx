
import { useEffect, useState } from 'react';


function AudiencePlate(props) {

    const [active, setActive] = useState(false)

    return (
        <div className={`audience-plate__item}`}>
                   <img src={`${props.img}`} alt="" className="audience-plate__img" />
                    <p className="audience-plate__title">{props.title}</p>
                    </div>
    );
  }
  
  export default AudiencePlate;
  