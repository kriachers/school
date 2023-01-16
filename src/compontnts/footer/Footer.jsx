function Footer() {
    return ( 
        <div className="bg-blue ">
        <footer className="footer container">
            <div className="footer__info">
                <img src="./logo.svg" alt="" className="footer-info__logo" />
            </div>

                <div className="footer__class">
                    <h4 className="footer-class__title">Классы</h4>
                    <p className="footer-class__grade">1-4 класс</p>
                    <p className="footer-class__grade">5-8 класс</p>
                    <p className="footer-class__grade">9-11 класс</p>
                </div>
                <div className="footer__contact">
                    <div className="footer-contact__wrapper">
                        <img src="./footer/place.svg" alt="" className="footer-wrapper__icon" />
                        <aderss className="footer-wrapper__descr">г. Дмитров ул. Московская, дом 23 </aderss>
                    </div>
                    <div className="footer-contact__wrapper">
                        <img src="./footer/phone.svg" alt="" className="footer-wrapper__icon" />
                        <p className="footer-wrapper__descr">
                            <a className="footer-wrapper__link" href="tel:+78003003791">8 (800) 300-37-91</a> 
                        </p>
                    </div>
                </div>
               
        </footer>
        </div>
    );
}

export default Footer;