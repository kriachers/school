import Button from '../../ux/Button';


function Promo(props) {


    return (
        <div className="container">
        <div className="section">
            <section className="container-bottom promo flex">
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
        </section>
        </div>
       </div>
    );
  }
  
  export default Promo;
  