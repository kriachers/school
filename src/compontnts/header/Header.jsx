import Button from '../ux/Button'
import HeaderBar from './HeaderBar'
import { useState } from 'react';

function Header() {

const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
    <header className={`Header flex container-inner ${openMenu ? 'open' : ''}`}>
     <img src='./logo.svg' alt="" />
        <div className="header__wrapper flex">
            <p className="header-wrapper__phone">+7 (456) 567-67-67</p>
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

    <div className="container Grade__plate">
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
    </>
  );
}

export default Header;
