import Button from '../../ux/Button'

function Banner() {
    return (
    <>
        <div className="container Grade__plate flex">
            <div className='Grade-plate__tile'>
                <p className='Grade-tile__title'>1-4 классы</p>
            </div>
            <div className='Grade-plate__tile'>
                <p className='Grade-tile__title'>1-4 классы</p>
            </div>
            <div className='Grade-plate__tile'>
                <p className='Grade-tile__title'>1-4 классы</p>
             </div>
        </div>

    <div className="container Banner flex">
        <div className="Banner__wrapper">
            <h1 className="Banner__title">
                Настоящая школа <span className="Banner__title--blue">у вас дома!</span>
            </h1>

            <p className="Banner__descr">
            Мы даем детям реальныеw знания, потому наши классы не превышают 10 человек. А интерактивность и вовлеченность делает уроки интересными для детей.
            </p>
            <p className="Banner__descr--bold">
            Семейное образование с нами - это эффективно!
            </p>

            <Button title={"Записаться на урок"} class={"Banner__button"}></Button>
        </div>

        <img className="Banner__icon" src="./banner/pic_main.png" alt="" />

    </div>
    </>
    );
  }
  
  export default Banner;