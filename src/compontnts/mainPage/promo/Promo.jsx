import Button from '../../ux/Button';
import {useInView} from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function Promo(props) {


    return (
       <div className="container container-bottom promo flex">
            <img src={`${props.img}`} alt="" className={`promo__img`} />
            <div className="promo__img--transparent">

            </div>
                <div className="promo__right">
                    <div className="promo__wrapper">
                        <h3 className="promo__title">{props.title}</h3>
                        <p className="promo__descr">{props.descr}</p>
                    </div>
                <Button title={'Записаться на урок'} class={'button-long promo__button'}></Button>
             </div>
       </div>
    );
  }
  
  export default Promo;
  