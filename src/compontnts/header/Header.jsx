import Button from '../ux/Button'
import HeaderBar from './HeaderBar'
import { useState } from 'react';

function Header() {

const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
    <div className={`container header-container ${openMenu ? 'open' : ''}`}>
    <header className={`Header flex section`}>
     <img className="header__logo" src='./logo.svg' alt="" />
        <div className="header__wrapper flex">
            <a href="tel:+74565676767" className="header-wrapper__phone">8 (800) 300-37-91</a>
            <Button class={'header-wrapper__button'} title={'Записаться на урок'}></Button>
        </div>
        <div className={`header__burger-button ${openMenu ? 'open' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
          <span className="header-burger-button__line"></span>
          <span className="header-burger-button__line"></span>
          <span className="header-burger-button__line"></span>
        </div>
    </header>

    <div className={`header-bar__wrapper ${openMenu ? 'open' : ''}`}>
      <HeaderBar></HeaderBar>
    </div>
 
    <div className="section Grade__plate">
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
      </div>
    </>
  );
}

export default Header;
